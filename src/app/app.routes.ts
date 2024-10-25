import { Routes } from '@angular/router';
import LoginComponent from './auth/login/login.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    // loadComponent: () => import('./auth/login/login.component'),
    component: LoginComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'projects',
    // loadComponent: () => import('./projects/project-list/project-list.component'),
    component: ProjectListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'projects',
  },
];
