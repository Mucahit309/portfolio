import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  image: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  techIcons: { icon: string; name: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: '01',
      title: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/projects/join2.png',
      description: 'A task management system based on the Kanban board. Create and organize tasks using drag and drop functions, assign users and categories.',
      githubUrl: 'https://github.com/mucahit309',
      liveUrl: 'https://github.com/Mucahit309',
      techIcons: [
        { icon: 'assets/projects/angular.svg', name: 'Angular' },
        { icon: 'assets/projects/typescript.svg', name: 'TypeScript' },
        { icon: 'assets/projects/html.svg', name: 'HTML' },
        { icon: 'assets/projects/css.svg', name: 'CSS' },
        { icon: 'assets/projects/firebase.svg', name: 'Firebase' }
      ]
    },
    {
      id: '02',
      title: 'El Pollo Loco',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/projects/polloloco2.png',
      description: 'A jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubUrl: 'https://github.com/mucahit309',
      liveUrl: 'https://github.com/Mucahit309',
      techIcons: [
        { icon: 'assets/projects/js.svg', name: 'JavaScript' },
        { icon: 'assets/projects/html.svg', name: 'HTML' },
        { icon: 'assets/projects/css.svg', name: 'CSS' }
      ]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}