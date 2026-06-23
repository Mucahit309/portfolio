import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    Hero, 
    About, 
    Projects, 
    Skills, 
    Testimonials, 
    Contact
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}