import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('src/app/pages').then(m => m.HomeComponent),
  },
];
