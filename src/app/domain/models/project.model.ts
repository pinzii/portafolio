export type ProjectTag =
  | 'Angular'
  | 'Spring Boot'
  | 'Material'
  | 'Bootstrap'
  | 'API'
  | 'Clean Architecture';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
}