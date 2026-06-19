import { Injectable } from '@angular/core';

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private testimonials: Testimonial[] = [
    {
      id: '1',
      text: 'Mücahit is a highly skilled Fullstack Developer. His ability to grasp complex problems and implement clean, scalable solutions is truly impressive. Working with him is always a pleasure.',
      author: 'Marco',
      role: 'Senior Developer / Mentor'
    },
    {
      id: '2',
      text: 'I have had the opportunity to work alongside Mücahit on several challenging projects. His attention to detail, specifically in modern web frameworks and UI/UX design, elevates the entire team.',
      author: 'Sarah Johnson',
      role: 'Frontend Engineer'
    },
    {
      id: '3',
      text: 'A dedicated professional with a great work ethic. Mücahit not only delivers high-quality code but also communicates effectively, making him a valuable asset to any agile development team.',
      author: 'David Chen',
      role: 'Project Manager'
    }
  ];

  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }
}