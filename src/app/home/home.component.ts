import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Navigation -->
    <app-navbar></app-navbar>

    <!-- Hero section -->
    <app-hero></app-hero>

    <!-- Features section -->
    <app-features></app-features>
    
    <!-- Community section -->
    <app-community></app-community>

    <!-- Footer 
    <app-footer></app-footer>
    -->
  `,
  styles: []
})
export class HomeComponent {
  constructor(private translate: TranslateService) {}
} 