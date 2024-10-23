import { Routes } from '@angular/router';
import LoginComponent from './pages/authentication/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
