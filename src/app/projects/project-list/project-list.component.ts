import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../core/services/request.service';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../auth/auth.service';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Project } from '../interfaces/project.interface';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [JsonPipe, MatCardModule, MatIconModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  constructor(private projectService: RequestService) {}
  ngOnInit(): void {
    this.projectService.get(environment.TYPICODE_SERVICE, 'users').subscribe({
      next: (response) => {
        this.projects = response;
      },
    });
  }

  seeTasks(proyecto: Project): void {
    console.log(proyecto);
    this.projectService
      .get(environment.TYPICODE_SERVICE, `todos?userId=${proyecto.id}`)
      .subscribe({
        next: (response) => {
          console.log(`Tareas del proyecto:`);
          console.log(response);
        },
      });
  }
}
