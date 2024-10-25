import { Routes } from '@angular/router';
import LoginComponent from './auth/login/login.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { TaskListComponent } from './tasks/task-list/task-list.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: ':proyecto_id',
    //     component: TaskListComponent,
    //     canActivate: [AuthGuard],
    //   },
    // ],
  },
  {
    path: 'projects/:proyecto_id',
    component: TaskListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'projects',
  },
];
