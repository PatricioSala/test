import type { Context } from 'https://deno.land/x/hono/mod.ts';
import supabase from "../../_shared/supabaseClient.ts";

const Users = supabase.from("users");

const authController = {
    signUp: async (c: Context) => {
        const userData = await c.req.parseBody();
        const { data, error } = await Users
            .insert({
                username: userData.username,
                email: userData.email,
                password: userData.password
            })
            .select("*");

        if (error) {
            return c.json(error);
        }

        return c.text("Create User");
    },
    signIn: async (c: Context) => {
        const userData = await c.req.parseBody();

        const { data, error } = await Users
            .select("*")
            .eq("email", userData.email)
            .eq("password", userData.password)
            .single();

        if (error) {
            return c.json(error);
        }

        return c.text("Sign In");
    }
};

export default authController;