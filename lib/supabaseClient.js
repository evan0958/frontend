import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your project's URL and anon key.
// Enable session persistence and auto-refresh to keep users logged in.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);
