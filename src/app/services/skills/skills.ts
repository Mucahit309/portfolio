import { Injectable } from '@angular/core';

export interface TooltipItem {
  icon: string;
  name: string;
}

export interface Skill {
  name: string;
  icon: string;
  tooltipTitle?: string;
  tooltipItems?: TooltipItem[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [
    { name: 'HTML', icon: 'assets/skills/html.svg' },
    { name: 'CSS', icon: 'assets/skills/css.svg' },
    { name: 'JavaScript', icon: 'assets/skills/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/skills/typescript.svg' },
    { name: 'Angular', icon: 'assets/skills/angular.svg' },
    { name: 'Git', icon: 'assets/skills/git.svg' },
    { name: 'REST-API', icon: 'assets/skills/api.svg' },
    { name: 'Scrum', icon: 'assets/skills/scrum.svg' },
    { name: 'Jira', icon: 'assets/skills/jira.svg' },
    { name: 'SQL', icon: 'assets/skills/sql.svg' },
    { name: 'Docker', icon: 'assets/skills/docker.svg' },
    { name: 'Python', icon: 'assets/skills/python.svg' },
    { name: 'Linux', icon: 'assets/skills/linux.svg' },
    { name: 'Virtual machines', icon: 'assets/skills/vm.svg' },
    { 
      name: 'Growth mindset', 
      icon: 'assets/skills/growth.svg',
      tooltipTitle: 'I have a special interest in learing',
      tooltipItems: [
        { icon: 'assets/skills/react2.svg', name: 'React' },
        { icon: 'assets/skills/vue2.svg', name: 'Vue.js' }
      ]
    }
  ];

  getSkills(): Skill[] {
    return this.skills;
  }
}