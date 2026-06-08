import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './features/navbar/navbar';
import { Hero } from './features/hero/hero';
import { About} from './features/about/about';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Testimonials } from './features/testimonials/testimonials';
import { Contact } from './features/contact/contact';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Testimonials,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio';
}