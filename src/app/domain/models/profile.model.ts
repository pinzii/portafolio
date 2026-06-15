export interface Education {
  readonly id: string;
  readonly title: string;
  readonly institution: string;
  readonly year: string;
  readonly type: 'degree' | 'certificate';
}

export interface Skill {
  readonly name: string;
  readonly category: 'frontend' | 'backend' | 'core';
}