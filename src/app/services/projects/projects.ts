import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}