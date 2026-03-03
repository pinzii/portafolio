import { Project } from '../../domain/models/project.model';

export const PROJECTS_MOCK: Project[] = [
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'Dashboard con Angular Material, autenticación y secciones modulares.',
    tags: ['Angular', 'Material'],
    repoUrl: 'https://github.com/pinzii/admin-dashboard',
    liveUrl: '',
    featured: true,
  },  
  {
    id: 'product-manager-app',
    title: 'Product Manager App',
    description: 'CRUD de productos con Angular Material y backend mock con json-server.',
    tags: ['Angular', 'Material', 'API'],
    repoUrl: 'https://github.com/pinzii/product-manager-app',
    liveUrl: '',
    featured: false,
  },
];