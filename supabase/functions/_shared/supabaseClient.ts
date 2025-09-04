import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.44.2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!; 

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;