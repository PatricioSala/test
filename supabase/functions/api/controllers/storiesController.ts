import type { Context } from 'https://deno.land/x/hono/mod.ts';
import supabase from "../../_shared/supabaseClient.ts";

const storiesController = {
    getAll: async (c: Context) => {
        const { data, error } = await supabase.from("stories")
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    getById: async (c: Context) => {
        const { id } = c.req.param();
        const { data, error } = await supabase.from("stories")
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
        
        const { data, error } = await supabase.from("stories")
            .insert(postData)
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    delete: async (c: Context) => {
        const { id } = c.req.param();
        const { data, error } = await supabase.from("stories")
            .delete()
            .eq("id", id)
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    }
};

export default storiesController;