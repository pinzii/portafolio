import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { Project } from '../../../../domain/models/project.model';
import { GetProjectsUseCase } from '../../../../application/use-cases/get-projects.usecase';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {

  projects$!: Observable<Project[]>;

  constructor(private readonly getProjects: GetProjectsUseCase) {
    this.projects$ = this.getProjects.execute();
  }
}