import { Injectable, signal } from '@angular/core';
import { Education, Skill } from '../../domain/models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private readonly ACADEMIC_DATA: Education[] = [
    {
      id: 'edu1',
      title: 'Ingeniería de software (en curso)', 
      institution: 'Corporación Universitaria Iberoamericana', 
      year: 'Presente',
      type: 'degree'
    },
    {
      id: 'edu2',
      title: 'Técnico Programación de software', 
      institution: 'SENA', 
      year: '2021',
      type: 'degree'
    },
    {
      id: 'cert1',
      title: 'Inmersión IA Revolution',
      institution: 'Tetra Educación',
      year: '2026',
      type: 'certificate'
    },
    {
      id: 'cert2',
      title: 'Curso de C++ Básico', 
      institution: 'Código Facilito', 
      year: '2024',
      type: 'certificate'
    },
    {
      id: 'cert3',
      title: 'Bootcamp Frontend en JavaScript', // [cite: 13, 14]
      institution: 'Código Facilito', // [cite: 9, 15]
      year: '2022', // [cite: 16]
      type: 'certificate'
    },
    {
      id: 'cert4',
      title: 'Fundamentos y Lógica de Programación', // [cite: 19, 48]
      institution: 'Udemy', // [cite: 24, 52]
      year: '2018', // [cite: 20, 48]
      type: 'certificate'
    },
    {
      id: 'cert5',
      title: 'Learn Java Course', // [cite: 39, 43]
      institution: 'Codecademy', // [cite: 33]
      year: '2018', // [cite: 38]
      type: 'certificate'
    }
  ];

  private readonly SKILLS_DATA: Skill[] = [
    { name: 'JavaScript (ES6+)', category: 'frontend' }, // [cite: 60]
    { name: 'HTML & CSS', category: 'frontend' }, // [cite: 60]
    { name: 'Angular', category: 'frontend' },
    { name: 'Java', category: 'backend' }, // [cite: 60]
    { name: 'C++', category: 'backend' }, // [cite: 5]
    { name: 'Lógica Matemática', category: 'core' }, // [cite: 61]
    { name: 'Trabajo en equipo', category: 'core' } // [cite: 61]
  ];

  private educationSignal = signal<Education[]>(this.ACADEMIC_DATA);
  private skillsSignal = signal<Skill[]>(this.SKILLS_DATA);

  getEducation = this.educationSignal.asReadonly();
  getSkills = this.skillsSignal.asReadonly();
}