import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { ProjectRepositoryPort } from './domain/ports/project-repository.port';
import { ProjectMockRepository } from './infrastructure/repositories/project-mock.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    { provide: ProjectRepositoryPort, useClass: ProjectMockRepository },
  ],
};