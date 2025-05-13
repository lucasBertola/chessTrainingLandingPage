import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  template: `
    <header class="relative pt-10 overflow-hidden" id="accueil">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <!-- Formes géométriques décoratives -->
      <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-56 h-56 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div class="absolute top-0 left-0 hidden lg:block">
        <div class="grid grid-cols-12 gap-0.5 opacity-5">
          <ng-container *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,11,12]">
            <ng-container *ngFor="let j of [1,2,3,4,5,6,7,8,9,10,11,12]" class="w-6 h-6 bg-primary-800 rounded-full transform rotate-45"></ng-container>
          </ng-container>
        </div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 min-h-[calc(100vh-5rem)] flex items-center">
        <div class="md:flex md:items-center md:justify-between w-full">
          <div class="md:w-1/2 md:pr-6 relative z-10">
            <div class="inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-700/20 text-primary-700 mb-2 backdrop-blur-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-500 mr-1.5"></span>
              <p class="font-medium text-xs">{{ 'hero.tagline' | translate }}</p>
            </div>
            
            <h1 class="text-xl md:text-2xl font-extrabold mb-2 leading-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 block">{{ 'hero.title' | translate }}</span>
              <div class="relative inline-block mt-1">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-teal-400">{{ 'hero.practice' | translate }}</span>
                <svg class="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C17.6667 3.5 71.2 0.2 160 3C248.8 5.8 290.167 9.5 301 11" stroke="url(#paint0_linear)" stroke-width="3" stroke-linecap="round"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="7" x2="301" y2="7" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0EA5E9"/>
                      <stop offset="1" stop-color="#2DD4BF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </h1>
            
            <p class="text-sm text-gray-600 mb-2 md:max-w-md">
              {{ 'hero.subtitle' | translate }}
            </p>
            
            <!-- Badge 100% Gratuit -->
            <div class="inline-flex items-center mb-3 space-x-2">
              <div class="h-6 px-2 bg-gradient-to-r from-primary-600 to-teal-500 rounded-l-full flex items-center">
                <span class="text-white font-bold text-xs">{{ 'hero.free' | translate }}</span>
              </div>
              <div class="h-6 px-2 bg-gray-100 rounded-r-full flex items-center">
                <span class="text-gray-700 text-xs">{{ 'hero.noAds' | translate }}</span>
              </div>
            </div>
            
            <div class="flex flex-row gap-2">
              <button class="group relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden font-bold text-white rounded-lg">
                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-600 to-teal-600 group-hover:from-primary-600 group-hover:to-teal-600"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-teal-500 opacity-30 group-hover:rotate-90 ease"></span>
                <span class="relative flex items-center">
                  <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M12 4L7 9M12 4L17 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ 'hero.cta' | translate }}
                </span>
              </button>
              
              <button class="relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden text-primary-700 border border-primary-300 rounded-lg hover:text-white group">
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary-700 rounded-full group-hover:w-full group-hover:h-56"></span>
                <span class="relative flex items-center">
                  <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 17L6 12M6 12L11 7M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {{ 'hero.discover' | translate }}
                </span>
              </button>
            </div>
          </div>
          <div class="mt-4 md:mt-0 md:w-1/2">
            <div class="bg-white rounded-xl shadow-lg p-2.5 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 relative z-10 backdrop-blur-sm bg-white/80">
              <div class="flex items-center justify-between mb-1.5">
                <h3 class="text-sm font-semibold text-gray-800">{{ 'hero.exercise' | translate }}</h3>
                <div class="flex items-center">
                  <span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                  <span class="ml-1 text-xs font-medium text-green-600">{{ 'hero.online' | translate }}</span>
                </div>
              </div>
              
              <!-- Échiquier 3D -->
              <app-chess-board></app-chess-board>
              
              <div class="mt-1.5 p-2 bg-gradient-to-br from-primary-50 to-teal-50 rounded-lg border border-primary-100/50">
                <p class="text-xs font-semibold text-gray-800">{{ 'hero.bestMove' | translate }}</p>
                <p class="mt-0.5 text-gray-600 text-xs">{{ 'hero.difficulty' | translate }} <span class="text-primary-600 font-medium">1500 elo</span></p>
                <div class="mt-1.5 flex justify-between items-center">
                  <div class="flex items-center space-x-1">
                    <div class="flex -space-x-1.5">
                      <div class="w-3.5 h-3.5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px] text-gray-600">A</div>
                      <div class="w-3.5 h-3.5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px] text-gray-600">S</div>
                      <div class="w-3.5 h-3.5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px] text-gray-600">M</div>
                    </div>
                    <span class="text-gray-500 text-[10px]">+309 {{ 'hero.solved' | translate }}</span>
                  </div>
                  <button class="bg-gradient-to-r from-primary-600 to-teal-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-md hover:from-primary-500 hover:to-teal-400 transition-colors shadow-sm">
                    {{ 'hero.try' | translate }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    /* Animation de blob */
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `]
})
export class HeroComponent {
  constructor(private translate: TranslateService) {}
} 