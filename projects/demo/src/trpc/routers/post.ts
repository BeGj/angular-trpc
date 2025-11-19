import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const postRouter = router({
    getPosts: publicProcedure.input(z.object({blogId: z.number().optional()})).query((opts) => {
        return [
            { id: 1, title: 'Public Post 1', blogId: 1 },
            { id: 2, title: 'Public Post 1', blogId: 1 },
            { id: 3, title: 'Some random post about trpc', blogId: 2 },
            { id: 4, title: 'Other post about trpc', blogId: 2 },
            { id: 5, title: 'I Love cookies', blogId: 2 },
        ].filter(post => opts.input.blogId === undefined || post.blogId === opts.input.blogId);
    }),
})