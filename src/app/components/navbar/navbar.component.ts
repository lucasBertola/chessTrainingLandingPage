import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/70 z-50 transition-all duration-300 border-b border-gray-200/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <div class="relative overflow-hidden w-10 h-10 flex items-center justify-center">
                <div class="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg transform rotate-3"></div>
                <svg class="h-6 w-6 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10 8H14L12 12L14 16H10L12 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 10L5 12L7 14M17 10L19 12L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="ml-3 text-xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">ChessTrainer</span>
            </div>
          </div>
          <div class="hidden md:flex md:items-center md:space-x-8">
            <a (click)="scrollToTop()" class="relative group cursor-pointer">
              <span class="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 font-medium">Accueil</span>
              <span class="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
            <a (click)="scrollToElement('avantages')" class="relative group cursor-pointer">
              <span class="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 font-medium">Avantages</span>
              <span class="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
            <a (click)="scrollToElement('communaute')" class="relative group cursor-pointer">
              <span class="text-gray-700 hover:text-primary-600 transition-colors px-3 py-2 font-medium">Communauté</span>
              <span class="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
 
            
          </div>
          <div class="flex items-center">
            <button class="relative px-5 py-2.5 overflow-hidden font-medium text-white bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg group">
              <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span class="relative">Connexion</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
} 