import { publicProcedure, router } from "../trpc";

export const blogRouter = router({
    getBlogs: publicProcedure.query(() => {
        return [
            { id: 1, title: 'Public Blog 1' },
            { id: 2, title: 'Public Blog 2' },
        ];
    }),
})