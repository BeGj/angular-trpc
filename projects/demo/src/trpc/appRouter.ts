import { blogRouter } from './routers/blog';
import { postRouter } from './routers/post';
import { t } from './trpc';

export const appRouter = t.router({
    post: postRouter,
    blog: blogRouter
});

export type AppRouter = typeof appRouter;
