import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  technologies: string[];
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/projects/join.png'
    },
    {
      title: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/projects/polloloco.png'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}