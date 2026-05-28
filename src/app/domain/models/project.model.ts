export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly links: { github?: string; demo?: string; caseStudy?: string };
  readonly coverUrl: string; // Ruta de la imagen del proyecto
  readonly year: number;
  readonly role: string;
}