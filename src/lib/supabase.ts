import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Access environment variables from Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase environment variables are missing!');
}

// Initialize Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
