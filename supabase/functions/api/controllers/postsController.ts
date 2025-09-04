import type { Context } from 'https://deno.land/x/hono/mod.ts'

export const postsController = {
    getAll: async (c: Context) => {
        return c.text("Get Posts");
    },
    getById: async (c: Context) => {
        const { id } = c.req.param();
        return c.text(`Get Post ${id}`);
    },
    create: async (c: Context) => {
        return c.text("Create Post");
    }
};