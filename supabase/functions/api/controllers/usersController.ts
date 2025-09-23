import type { Context } from 'https://deno.land/x/hono/mod.ts';
import supabase from "../../_shared/supabaseClient.ts";

const usersController = {
    create: async (c: Context) => {
        const userData = await c.req.parseBody();
        const { data, error } = await supabase.from("users")
            .insert({
                username: userData.username,
                email: userData.email,
                password: userData.password
            });

        return c.text("Create User");
    },
    getAll: async (c: Context) => {
        const { data, error } = await supabase.from("users")
            .select(`
                id,
                username,
                email    
            `);

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    },
    getById: async (c: Context) => {
        const { id } = c.req.param();
        const { data, error } = await supabase.from("users")
            .select(`
                id,
                username,
                email    
            `)
            .eq("id", id)
            .single();

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    }
};

export default usersController;