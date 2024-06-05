import { QueryClient } from '@tanstack/react-query';
import { QueryClientConfig } from '@tanstack/query-core';

const cacheTime = 60_000 * 5;

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: typeof window === 'undefined' ? 0 : cacheTime,
      gcTime: typeof window === 'undefined' ? 0 : cacheTime,
      retry: 1,
      refetchOnMount: false,
    },
  },
};

const getQueryClient = () => new QueryClient(queryClientConfig);
export const tanstackClient = getQueryClient();
