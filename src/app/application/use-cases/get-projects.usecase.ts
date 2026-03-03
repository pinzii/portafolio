import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../domain/models/project.model';
import { ProjectRepositoryPort } from '../../domain/ports/project-repository.port';

@Injectable({ providedIn: 'root' })
export class GetProjectsUseCase {
  constructor(private readonly repo: ProjectRepositoryPort) {}

  execute(): Observable<Project[]> {
    return this.repo.getAll();
  }
}