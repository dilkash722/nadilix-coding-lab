import { createClient } from "@supabase/supabase-js";

// Env variables (Vite format)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safety check (debugging me help karega)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase env variables are missing");
}

// Create client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
