import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  isGerman = false;
  activeLink = '';
  
  private translate = inject(TranslateService);

  constructor() {
    this.isGerman = this.translate.currentLang() === 'de' || localStorage.getItem('language') === 'de';
  }

  toggleLanguage() {
    const nextLang = this.isGerman ? 'en' : 'de';
    
    this.translate.use(nextLang);
    localStorage.setItem('language', nextLang);
    
    this.isGerman = !this.isGerman;
  }

  setActive(link: string) {
    this.activeLink = link;
  }
}