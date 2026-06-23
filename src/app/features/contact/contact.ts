import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacyPolicy: [false, Validators.requiredTrue]
  });

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;
      this.submitSuccess = false;

      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrewgebb'; 

      if (FORMSPREE_ENDPOINT === 'https://formspree.io/f/mrewgebb') {
        setTimeout(() => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          setTimeout(() => this.submitSuccess = false, 5000);
        }, 1500);
        return;
      }

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(this.contactForm.value)
        });

        if (response.ok) {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          setTimeout(() => this.submitSuccess = false, 5000);
        } else {
          throw new Error('Network Error');
        }
      } catch (error) {
        this.isSubmitting = false;
        this.submitError = true;
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}