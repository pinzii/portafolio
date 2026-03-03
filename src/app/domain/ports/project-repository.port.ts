import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

export abstract class ProjectRepositoryPort {
  abstract getAll(): Observable<Project[]>;
}