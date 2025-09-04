import type { Context } from 'https://deno.land/x/hono/mod.ts';
import supabase from "../../_shared/supabaseClient.ts";

const Posts = supabase.from("posts");

export const postsController = {
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
            .eq("id", id);

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    create: async (c: Context) => {
        return c.text("Create Post");
    }
};