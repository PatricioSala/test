import { Hono } from 'jsr:@hono/hono'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.44.2'

import mainRouter from './routes/mainRouter.ts';
import postsRouter from './routes/postsRouter.ts';

// change this to your function name
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!; 

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const app = new Hono().basePath('/api');

app.route("/", mainRouter);
app.route("/posts", postsRouter);

Deno.serve(app.fetch);