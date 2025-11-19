import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:blogId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        {
          blogId: '1',
        },
        {
          blogId: '2',
        },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
