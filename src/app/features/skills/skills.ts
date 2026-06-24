import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../../services/skills/skills';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
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