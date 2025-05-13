import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
export class AppComponent {
  constructor() {}
} 