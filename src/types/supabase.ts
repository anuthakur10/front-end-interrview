export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          status: string
          last_seen: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          status?: string
          last_seen?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          status?: string
          last_seen?: string
          created_at?: string
          updated_at?: string
        }
      }
      conversations: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          is_group: boolean
          name: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          is_group?: boolean
          name?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          is_group?: boolean
          name?: string | null
        }
      }
      conversation_participants: {
        Row: {
          conversation_id: string
          profile_id: string
          joined_at: string
        }
        Insert: {
          conversation_id: string
          profile_id: string
          joined_at?: string
        }
        Update: {
          conversation_id?: string
          profile_id?: string
          joined_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          conversation_id: string
          sender_id: string
          content: string | null
          created_at: string
          updated_at: string
          type: string
          file_url: string | null
          status: string
        }
        Insert: {
          id?: string
          conversation_id: string
          sender_id: string
          content?: string | null
          created_at?: string
          updated_at?: string
          type?: string
          file_url?: string | null
          status?: string
        }
        Update: {
          id?: string
          conversation_id?: string
          sender_id?: string
          content?: string | null
          created_at?: string
          updated_at?: string
          type?: string
          file_url?: string | null
          status?: string
        }
      }
    }
  }
}