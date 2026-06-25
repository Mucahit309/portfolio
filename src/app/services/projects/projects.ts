import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  image: string;
  descriptionKey: string;
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
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: 'assets/projects/join2.png',
      descriptionKey: 'PROJECTS.JOIN.DESC',
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
      descriptionKey: 'PROJECTS.POLLO.DESC',
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