import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  mouseX = 0;
  mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  updateCursorPosition(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}