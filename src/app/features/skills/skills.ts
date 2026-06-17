import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../../services/skills/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills implements OnInit {
  skillsList: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsList = this.skillsService.getSkills();
  }
}