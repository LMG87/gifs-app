import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./gifs/pages/dashboard/dashboard.component'),
    children: [
      {
        path: 'trending',
        title: 'Trending',
        loadComponent: () => import('./gifs/pages/trending/trending.component'),
      },
      {
        path: 'search',
        title: 'Search',
        loadComponent: () => import('./gifs/pages/search/search.component'),
      },
      {
        path: 'history/:query',
        title: 'History',
        loadComponent: () => import('./gifs/pages/history/history.component'),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'trending',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
