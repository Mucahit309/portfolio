import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss']
})
export class PrivacyPolicy {}