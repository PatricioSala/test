import type { Context } from 'https://deno.land/x/hono/mod.ts';
import supabase from "../../_shared/supabaseClient.ts";

const Users = supabase.from("users");

export const usersController = {
    create: async (c: Context) => {
        const { data, error } = await Users
            .insert({});

        return c.text("Create User");
    },
    getAll: async (c: Context) => {
        const { data, error } = await Users
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
        const { data, error } = await Users
            .select(`
                id,
                username,
                email    
            `)
            .eq("id", id);

        if (error) {
            return c.json(error);
        }

        return c.json(data);
    }
};