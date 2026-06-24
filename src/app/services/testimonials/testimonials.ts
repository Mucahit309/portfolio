import { Injectable } from '@angular/core';

export interface Testimonial {
  id: string;
  textKey: string;
  authorKey: string;
  roleKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonials: Testimonial[] = [
    {
      id: '1',
      textKey: 'TESTIMONIALS.LIST.1.TEXT',
      authorKey: 'TESTIMONIALS.LIST.1.AUTHOR',
      roleKey: 'TESTIMONIALS.LIST.1.ROLE'
    },
    {
      id: '2',
      textKey: 'TESTIMONIALS.LIST.2.TEXT',
      authorKey: 'TESTIMONIALS.LIST.2.AUTHOR',
      roleKey: 'TESTIMONIALS.LIST.2.ROLE'
    },
    {
      id: '3',
      textKey: 'TESTIMONIALS.LIST.3.TEXT',
      authorKey: 'TESTIMONIALS.LIST.3.AUTHOR',
      roleKey: 'TESTIMONIALS.LIST.3.ROLE'
    }
  ];

  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }
}