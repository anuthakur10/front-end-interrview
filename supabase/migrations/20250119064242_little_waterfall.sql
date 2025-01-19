/*
  # Create profile function

  Creates a secure function to handle profile creation for new users
  that bypasses RLS policies.
*/

CREATE OR REPLACE FUNCTION create_profile(
  user_id UUID,
  user_email TEXT,
  user_name TEXT,
  full_name TEXT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, username, full_name, created_at, updated_at)
  VALUES (user_id, user_email, user_name, full_name, now(), now());
END;
$$;