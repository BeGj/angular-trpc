import { initTRPC, TRPCError } from '@trpc/server';
import SuperJSON from 'superjson';
import { Context } from './context';


export const t = initTRPC.context<Context>().create({
    transformer: SuperJSON
});


export const publicProcedure = t.procedure;

export const signedInProcedure = t.procedure.use(async (opts) => {
    if (!opts.ctx.auth.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'User is not signed in' });
    }
    return opts.next(
        opts
    )
})

export const router = t.router;
