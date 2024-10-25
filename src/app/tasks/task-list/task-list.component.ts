import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../../environments/environment';
import { RequestService } from '../../core/services/request.service';
import { Project } from '../../projects/interfaces/project.interface';
import { Task } from '../interfaces/task';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  snackBar = inject(MatSnackBar);

  tasks: Task[] = [];
  proyecto_id: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService
  ) {
    this.activatedRoute.params.subscribe((prm) => {
      this.proyecto_id = prm['proyecto_id'];
    });
  }

  ngOnInit(): void {
    this.requestService
      .get(environment.TYPICODE_SERVICE, `users/${this.proyecto_id}/todos`)
      .subscribe({
        next: (response) => {
          this.tasks = response as Task[];
        },
        error: (err: any) => {
          this.snackBar.open(
            'No se lograron traer los datos, revisa tu conexión a internet e intenta de nuevo',
            '',
            {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            }
          );
        },
      });
  }
}
