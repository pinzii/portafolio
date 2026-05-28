import { Component, inject, signal } from '@angular/core';
import { ProjectService } from '../../../data/services/project.service';
import { Project } from '../../../domain/models/project.model';

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  templateUrl: './projects-showcase.component.html',
  styleUrl: './projects-showcase.component.scss'
})
export class ProjectsShowcaseComponent {
  private projectService = inject(ProjectService);
  
  // Obtenemos todos los proyectos como un Signal
  projects = this.projectService.getAllProjects;
  
  // Signal para saber qué proyecto está activo en el Preview (Por defecto el primero)
  selectedProject = signal<Project>(this.projects()[0]);

  // Método que se llama al pasar el mouse (hover)
  selectProject(project: Project) {
    this.selectedProject.set(project);
  }
}