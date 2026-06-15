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
      description: 'Sistema de software para el sector salud enfocado en la gestión ágil de citas médicas. Arquitectura orientada a microservicios y escalabilidad.',
      stack: ['Angular', 'TypeScript', 'Microservices', 'Clean Architecture'],
      links: { demo: 'https://saludya-app.netlify.app', github: '#' },
      coverUrl: '/images/saludYa.jpg',
      year: 2026,
      role: 'Lead Developer'
    },
    {
      id: 'p2',
      title: 'Admin Dashboard',
      description: 'Panel de control administrativo moderno e intuitivo, construido con componentes reutilizables y un fuerte enfoque en el rendimiento de la interfaz (UI/UX).',
      stack: ['Angular', 'Angular Material','JSON Server (simulación de base de datos)', 'SCSS', 'RxJS', 'TypeScript', 'Netlify (hosting frontend)', 'Render (hosting backend)'],
      links: { demo: 'https://admin-dashboard-pinz19.netlify.app', github: '#' },
      coverUrl: '/images/admin-app.jpg',
      year: 2025,
      role: 'Frontend Engineer'
    },
    {
      id: 'p3',
      title: 'Product Manager App',
      description: 'Aplicación web para la administración integral del ciclo de vida de productos. Interfaces limpias, manejo de estado eficiente y diseño responsivo.',
      stack: ['Angular', 'TypeScript', ' RxJS', 'Angular Material (MDC)', 'NgRx (Store + Effects)', 'Netlify (hosting frontend)', 'Render (hosting backend)'],
      links: { demo: 'https://app-product-manager.netlify.app', github: '#' },
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
