import { AppRouter } from '../trpc/appRouter';
import { createTrpcClient } from 'angular-trpc';
import SuperJSON from 'superjson';

export const { provideTrpcClient, TrpcClient } = createTrpcClient<AppRouter>({
  url: '/api/trpc',
  options: {
    transformer: SuperJSON,
  },
});
