/*
  # Initial Schema for Chat Application

  1. New Tables
    - profiles
      - id (uuid, references auth.users)
      - username (text)
      - full_name (text)
      - avatar_url (text)
      - status (text)
      - last_seen (timestamp)
    
    - conversations
      - id (uuid)
      - created_at (timestamp)
      - updated_at (timestamp)
      - is_group (boolean)
      - name (text, for group chats)
      
    - conversation_participants
      - conversation_id (uuid, references conversations)
      - profile_id (uuid, references profiles)
      - joined_at (timestamp)
      
    - messages
      - id (uuid)
      - conversation_id (uuid, references conversations)
      - sender_id (uuid, references profiles)
      - content (text)
      - created_at (timestamp)
      - updated_at (timestamp)
      - type (text: 'text', 'image', 'file')
      - file_url (text)
      - status (text: 'sent', 'delivered', 'read')
      
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

DO $$ 
BEGIN

-- Create profiles table if it doesn't exist
IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles') THEN
    CREATE TABLE profiles (
      id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
      username text UNIQUE,
      full_name text,
      avatar_url text,
      status text DEFAULT 'offline',
      last_seen timestamptz DEFAULT now(),
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now()
    );
END IF;

-- Create conversations table if it doesn't exist
IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'conversations') THEN
    CREATE TABLE conversations (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now(),
      is_group boolean DEFAULT false,
      name text
    );
END IF;

-- Create conversation_participants table if it doesn't exist
IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'conversation_participants') THEN
    CREATE TABLE conversation_participants (
      conversation_id uuid REFERENCES conversations ON DELETE CASCADE,
      profile_id uuid REFERENCES profiles ON DELETE CASCADE,
      joined_at timestamptz DEFAULT now(),
      PRIMARY KEY (conversation_id, profile_id)
    );
END IF;

-- Create messages table if it doesn't exist
IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'messages') THEN
    CREATE TABLE messages (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      conversation_id uuid REFERENCES conversations ON DELETE CASCADE,
      sender_id uuid REFERENCES profiles ON DELETE CASCADE,
      content text,
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now(),
      type text DEFAULT 'text',
      file_url text,
      status text DEFAULT 'sent',
      CONSTRAINT valid_message_type CHECK (type IN ('text', 'image', 'file')),
      CONSTRAINT valid_message_status CHECK (status IN ('sent', 'delivered', 'read'))
    );
END IF;

END $$;

-- Enable Row Level Security (idempotent operations)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversation_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DO $$ 
BEGIN
    -- Profiles policies
    DROP POLICY IF EXISTS "Public profiles are viewable by authenticated users" ON profiles;
    DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
    
    -- Conversations policies
    DROP POLICY IF EXISTS "Users can view conversations they're part of" ON conversations;
    DROP POLICY IF EXISTS "Users can create conversations" ON conversations;
    
    -- Conversation participants policies
    DROP POLICY IF EXISTS "Users can view participants of their conversations" ON conversation_participants;
    DROP POLICY IF EXISTS "Users can add participants to conversations they're in" ON conversation_participants;
    
    -- Messages policies
    DROP POLICY IF EXISTS "Users can view messages in their conversations" ON messages;
    DROP POLICY IF EXISTS "Users can insert messages in their conversations" ON messages;
END $$;

-- Recreate policies
-- Profiles policies
CREATE POLICY "Public profiles are viewable by authenticated users"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Conversations policies
CREATE POLICY "Users can view conversations they're part of"
  ON conversations FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM conversation_participants
      WHERE conversation_id = id
      AND profile_id = auth.uid()
    )
  );

CREATE POLICY "Users can create conversations"
  ON conversations FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Conversation participants policies
CREATE POLICY "Users can view participants of their conversations"
  ON conversation_participants FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM conversation_participants AS cp
      WHERE cp.conversation_id = conversation_id
      AND cp.profile_id = auth.uid()
    )
  );

CREATE POLICY "Users can add participants to conversations they're in"
  ON conversation_participants FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM conversation_participants
      WHERE conversation_id = conversation_id
      AND profile_id = auth.uid()
    )
  );

-- Messages policies
CREATE POLICY "Users can view messages in their conversations"
  ON messages FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM conversation_participants
      WHERE conversation_id = conversation_id
      AND profile_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert messages in their conversations"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM conversation_participants
      WHERE conversation_id = conversation_id
      AND profile_id = auth.uid()
    )
  );

-- Drop existing function and trigger if they exist
DROP TRIGGER IF EXISTS update_conversation_timestamp ON messages;
DROP FUNCTION IF EXISTS update_conversation_timestamp();

-- Recreate function and trigger
CREATE OR REPLACE FUNCTION update_conversation_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE conversations
  SET updated_at = now()
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_conversation_timestamp
  AFTER INSERT ON messages
  FOR EACH ROW
  EXECUTE FUNCTION update_conversation_timestamp();