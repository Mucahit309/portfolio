import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {
  projectsList: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsList = this.projectsService.getProjects();
  }
}