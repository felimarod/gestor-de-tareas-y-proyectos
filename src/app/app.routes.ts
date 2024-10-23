import { Routes } from '@angular/router';
import LoginComponent from './pages/authentication/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
