import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects/projects';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  projectsService = inject(ProjectsService);
  projectsList = this.projectsService.getProjects();

  @ViewChild('projectDialog') projectDialog!: ElementRef<HTMLDialogElement>;

  currentProjectIndex = 0;
  selectedProject: Project | null = null;

  openDialog(index: number) {
    this.currentProjectIndex = index;
    this.selectedProject = this.projectsList[index];
    this.projectDialog.nativeElement.showModal();
    document.body.style.overflow = 'hidden';
  }

  closeDialog() {
    this.projectDialog.nativeElement.close();
    document.body.style.overflow = 'auto';
  }

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projectsList.length;
    this.selectedProject = this.projectsList[this.currentProjectIndex];
  }

  onDialogClick(event: MouseEvent) {
    if (event.target === this.projectDialog.nativeElement) {
      this.closeDialog();
    }
  }
}