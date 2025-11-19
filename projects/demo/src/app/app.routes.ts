import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        title: 'All blogs',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        path: '',
    },
    {
        title: 'Blog',
        path: 'blog/:blogId',
        loadComponent: () => import('./pages/blog/blog').then(m => m.Blog),
    },
    {
        path: '**',
        redirectTo: '',
    }
];
