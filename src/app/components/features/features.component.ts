import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  template: `
    <section id="avantages" class="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <!-- Cercles décoratifs -->
      <div class="absolute h-80 w-80 -top-40 -right-20 rounded-full bg-primary-100/50 mix-blend-multiply"></div>
      <div class="absolute h-80 w-80 -bottom-40 -left-20 rounded-full bg-teal-100/50 mix-blend-multiply"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <span class="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">{{ 'features.whyChooseUs' | translate }}</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ 'features.title' | translate }}</h2>
          <div class="h-1 w-20 bg-gradient-to-r from-primary-500 to-teal-500 mx-auto"></div>
          <p class="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            {{ 'features.subtitle' | translate }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Feature 1 -->
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] border border-gray-100">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">{{ 'features.practiceTitle' | translate }}</h3>
            <p class="text-gray-600">{{ 'features.practiceDesc' | translate }}</p>
            <a href="#" class="inline-flex items-center mt-4 text-primary-600 font-medium group-hover:text-primary-500">
              {{ 'features.learnMore' | translate }}
              <svg class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          
          <!-- Feature 2 -->
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] border border-gray-100">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{{ 'features.adaptiveTitle' | translate }}</h3>
            <p class="text-gray-600">{{ 'features.adaptiveDesc' | translate }}</p>
            <a href="#" class="inline-flex items-center mt-4 text-teal-600 font-medium group-hover:text-teal-500">
              {{ 'features.learnMore' | translate }}
              <svg class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          
          <!-- Feature 3 -->
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] border border-gray-100">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{{ 'features.communityTitle' | translate }}</h3>
            <p class="text-gray-600">{{ 'features.communityDesc' | translate }}</p>
            <a href="#" class="inline-flex items-center mt-4 text-purple-600 font-medium group-hover:text-purple-500">
              {{ 'features.learnMore' | translate }}
              <svg class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          
          <!-- Feature 4 - 100% Gratuit -->
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] border border-gray-100 md:col-span-3 lg:col-span-1">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-green-600 flex items-center justify-center mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex items-center mb-3">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">{{ 'features.freeTitle' | translate }}</h3>
            </div>
            <p class="text-gray-600">{{ 'features.freeDesc' | translate }}</p>
            <a href="#" class="inline-flex items-center mt-4 text-green-600 font-medium group-hover:text-green-500">
              {{ 'features.commitment' | translate }}
              <svg class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FeaturesComponent {
  constructor(private translate: TranslateService) {}
} 