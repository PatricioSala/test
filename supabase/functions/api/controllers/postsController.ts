import type { Context } from 'https://deno.land/x/hono/mod.ts';
import supabase from "../../_shared/supabaseClient.ts";

const Posts = supabase.from("posts");

const postsController = {
    getAll: async (c: Context) => {
        const { data, error } = await Posts
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    getById: async (c: Context) => {
        const { id } = c.req.param();
        const { data, error } = await Posts
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
        
        const { data, error } = await Posts
            .insert(postData)
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    delete: async (c: Context) => {
        const { id } = c.req.param();
        const { data, error } = await Posts
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