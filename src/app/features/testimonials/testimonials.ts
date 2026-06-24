import { Component, inject } from '@angular/core';
import { TestimonialsService } from '../../services/testimonials/testimonials';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class Testimonials {
  testimonialsService = inject(TestimonialsService);
  testimonials = this.testimonialsService.getTestimonials();
  
  currentIndex = 0;

  get prevIndex() {
    return this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  get nextIndex() {
    return this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;
  }

  next() {
    this.currentIndex = this.nextIndex;
  }

  prev() {
    this.currentIndex = this.prevIndex;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  handleCardClick(index: number) {
    if (index === this.prevIndex) {
      this.prev();
    } else if (index === this.nextIndex) {
      this.next();
    }
  }
}