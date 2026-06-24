import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss']
})
export class LegalNotice {}