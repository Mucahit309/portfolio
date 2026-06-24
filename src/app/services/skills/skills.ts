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
    { name: 'SKILLS.LIST.HTML', icon: 'assets/skills/html.svg' },
    { name: 'SKILLS.LIST.CSS', icon: 'assets/skills/css.svg' },
    { name: 'SKILLS.LIST.JS', icon: 'assets/skills/javascript.svg' },
    { name: 'SKILLS.LIST.TS', icon: 'assets/skills/typescript.svg' },
    { name: 'SKILLS.LIST.ANGULAR', icon: 'assets/skills/angular.svg' },
    { name: 'SKILLS.LIST.GIT', icon: 'assets/skills/git.svg' },
    { name: 'SKILLS.LIST.API', icon: 'assets/skills/api.svg' },
    { name: 'SKILLS.LIST.SCRUM', icon: 'assets/skills/scrum.svg' },
    { name: 'SKILLS.LIST.JIRA', icon: 'assets/skills/jira.svg' },
    { name: 'SKILLS.LIST.SQL', icon: 'assets/skills/sql.svg' },
    { name: 'SKILLS.LIST.DOCKER', icon: 'assets/skills/docker.svg' },
    { name: 'SKILLS.LIST.PYTHON', icon: 'assets/skills/python.svg' },
    { name: 'SKILLS.LIST.LINUX', icon: 'assets/skills/linux.svg' },
    { name: 'SKILLS.LIST.VM', icon: 'assets/skills/vm.svg' },
    { 
      name: 'SKILLS.LIST.GROWTH', 
      icon: 'assets/skills/growth.svg',
      tooltipTitle: 'SKILLS.TOOLTIP.TITLE',
      tooltipItems: [
        { icon: 'assets/skills/react2.svg', name: 'SKILLS.TOOLTIP.REACT' },
        { icon: 'assets/skills/vue2.svg', name: 'SKILLS.TOOLTIP.VUE' }
      ]
    }
  ];

  getSkills(): Skill[] {
    return this.skills;
  }
}