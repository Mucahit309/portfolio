import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  isGerman = false;
  activeLink = '';

  toggleLanguage() {
    this.isGerman = !this.isGerman;
  }

  setActive(link: string) {
    this.activeLink = link;
  }
}