import type { Context } from 'https://deno.land/x/hono/mod.ts';
import supabase from "../../_shared/supabaseClient.ts";

const postsController = {
    getAll: async (c: Context) => {
        const { data, error } = await supabase.from("posts")
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    getById: async (c: Context) => {
        const { id } = c.req.param();
        const { data, error } = await supabase.from("posts")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    create: async (c: Context) => {
        const postData = await c.req.parseBody();
        
        const { data, error } = await supabase.from("posts")
            .insert(postData)
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    delete: async (c: Context) => {
        const { id } = c.req.param();
        const { data, error } = await supabase.from("posts")
            .delete()
            .eq("id", id)
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    }
};

export default postsController;