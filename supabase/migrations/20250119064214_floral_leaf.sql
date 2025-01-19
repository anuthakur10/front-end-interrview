/*
  # Update profiles table policies

  1. Changes
    - Add policy to allow users to insert their own profile
    - Update existing policies for better security

  2. Security
    - Enable RLS
    - Add policies for insert/select/update
    - Ensure users can only manage their own profiles
*/

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Remove existing policies
DROP POLICY IF EXISTS "Public profiles are viewable by authenticated users" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create new policies
CREATE POLICY "Users can create their own profile"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view all profiles"
ON profiles FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);