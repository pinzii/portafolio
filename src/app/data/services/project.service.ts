import { Injectable, signal } from '@angular/core';
import { Project } from '../../domain/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private readonly MOCK_PROJECTS: Project[] = [
    {
      id: 'p1',
      title: 'SaludYa',
      description: 'Plataforma end-to-end para la gestión de citas médicas. Diseño de arquitectura escalable en la nube integrando un frontend optimizado y un backend seguro (API REST) con base de datos serverless.',
      stack: [
        'Angular', 
        'TypeScript', 
        'NestJS', 
        'Neon (Serverless PostgreSQL)', 
        'Clean Architecture', 
        'RxJS', 
        'Netlify', 
        'Render'
      ],
      links: { 
        demo: 'https://salud-yaa.netlify.app', 
        githubFrontend: 'https://github.com/pinzii/saludYa-frontend',
        githubBackend: 'https://github.com/pinzii/saludYa-backend' 
      },
      coverUrl: '/images/saludYa.jpg',
      year: 2026,
      role: 'Solutions Architect & Full Stack Developer'
    },
    {
      id: 'p2',
      title: 'Admin Dashboard',
      description: 'Panel de control administrativo moderno e intuitivo, construido con componentes reutilizables y un fuerte enfoque en el rendimiento de la interfaz (UI/UX).',
      stack: ['Angular', 'Angular Material','JSON Server (simulación de base de datos)', 'SCSS', 'RxJS', 'TypeScript', 'Netlify (hosting frontend)', 'Render (hosting backend)'],
      links: { 
        demo: 'https://admin-dashboard-pinz19.netlify.app', 
        github: 'https://github.com/pinzii/admin-dashboard' },
      coverUrl: '/images/admin-app.jpg',
      year: 2025,
      role: 'Frontend Engineer'
    },
    {
      id: 'p3',
      title: 'Product Manager App',
      description: 'Aplicación web para la administración integral del ciclo de vida de productos. Interfaces limpias, manejo de estado eficiente y diseño responsivo.',
      stack: ['Angular', 'TypeScript', ' RxJS', 'Angular Material (MDC)', 'NgRx (Store + Effects)', 'Netlify (hosting frontend)', 'Render (hosting backend)'],
      links: { 
        demo: 'https://app-product-manager.netlify.app', 
        github: 'https://github.com/pinzii/product-manager-app' },
      coverUrl: '/images/product-app.jpg',
      year: 2025,
      role: 'Frontend Engineer'
    }
  ];

  // Estado reactivo centralizado
  private projectsSignal = signal<Project[]>(this.MOCK_PROJECTS);

  // Exponemos la señal como solo lectura para proteger los datos
  getAllProjects = this.projectsSignal.asReadonly();
}
