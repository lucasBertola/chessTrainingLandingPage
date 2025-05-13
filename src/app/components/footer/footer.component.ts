import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div class="flex items-center mb-4">
              <svg class="h-8 w-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5L5 19M12 3V7M12 17V21M3 12H7M17 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
              <span class="ml-2 text-xl font-bold">ChessTrainer</span>
            </div>
            <p class="text-gray-400 mb-6">Apprenez les échecs par la pratique avec des exercices stratégiques adaptés à votre niveau.</p>
            
            <!-- Badge 100% gratuit -->
            <div class="flex items-center p-3 bg-gray-800 rounded-lg mb-6">
              <div class="bg-green-500 rounded-full p-1 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="text-sm font-medium text-green-300">
                100% Gratuit - Sans publicité - Open source
              </span>
            </div>
            
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Accueil</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Exercices</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Communauté</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">À propos</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Ressources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Guide du débutant</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Exercices populaires</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Forum</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
            <p class="text-gray-400 mb-4">Recevez nos nouveaux exercices et conseils stratégiques</p>
            <div class="flex">
              <input type="email" placeholder="Votre email" class="bg-gray-800 text-white rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary-400">
              <button class="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-500 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400">&copy; {{getCurrentYear()}} ChessTrainer. Tous droits réservés.</p>
          <div class="mt-4 md:mt-0 flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Conditions d'utilisation</a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Politique de confidentialité</a>
            <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors text-sm">Gratuit et open source</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  // Fonction pour obtenir l'année courante
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
} 