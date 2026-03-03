import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../domain/models/project.model';
import { ProjectRepositoryPort } from '../../domain/ports/project-repository.port';
import { PROJECTS_MOCK } from '../data/projects.mock';

@Injectable({ providedIn: 'root' })
export class ProjectMockRepository implements ProjectRepositoryPort {
  getAll(): Observable<Project[]> {
    return of(PROJECTS_MOCK);
  }
}