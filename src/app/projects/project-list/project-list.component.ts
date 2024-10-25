import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { RequestService } from '../../core/services/request.service';
import { Project } from '../interfaces/project.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [JsonPipe, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  snackBar = inject(MatSnackBar);
  projects: Project[] = [];
  constructor(private requestService: RequestService, private router: Router) {}

  ngOnInit(): void {
    this.requestService.get(environment.TYPICODE_SERVICE, 'users').subscribe({
      next: (response) => {
        this.projects = response as Project[];
      },
      error: (err: any) => {
        this.snackBar.open(
          'No se lograron traer los datos, revisa tu conexión a internet e intenta de nuevo',
          '',
          {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          }
        );
      },
    });
  }

  seeTasks(proyecto: Project): void {
    this.router.navigate(['projects', `${proyecto.id}`]);
  }
}
