import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>('en');
  public currentLang$ = this.currentLang.asObservable();
  
  private supportedLangs = ['en', 'fr', 'es', 'de', 'ja', 'ru'];
  private readonly LANG_KEY = 'preferredLanguage';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private location: Location
  ) { 
    // Initialiser la langue par défaut
    this.initLanguage();
    
    // Écouter les changements de route pour mettre à jour la langue si nécessaire
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const urlLang = this.getLanguageFromUrl();
      if (urlLang && this.supportedLangs.includes(urlLang) && urlLang !== this.getCurrentLang()) {
        this.setLanguage(urlLang, false);
      }
    });
  }

  /**
   * Initialiser la langue en fonction de la priorité:
   * 1. Langue dans l'URL
   * 2. Langue enregistrée dans le localStorage
   * 3. Langue du navigateur (si supportée)
   * 4. Langue par défaut (anglais)
   */
  initLanguage(): void {
    // Vérifier d'abord si la langue est dans l'URL
    const urlLang = this.getLanguageFromUrl();
    
    if (urlLang && this.supportedLangs.includes(urlLang)) {
      this.setLanguage(urlLang, false);
      return;
    }
    
    // Ensuite vérifier le localStorage
    const savedLang = localStorage.getItem(this.LANG_KEY);
    if (savedLang && this.supportedLangs.includes(savedLang)) {
      this.setLanguage(savedLang, true);
      return;
    }
    
    // Essayer de détecter la langue du navigateur
    const browserLang = this.translate.getBrowserLang();
    if (browserLang && this.supportedLangs.includes(browserLang)) {
      this.setLanguage(browserLang, true);
      return;
    }
    
    // Par défaut, utiliser l'anglais
    this.setLanguage('en', true);
  }

  /**
   * Obtenir la langue actuelle
   */
  getCurrentLang(): string {
    return this.currentLang.value;
  }

  /**
   * Définir la langue de l'application
   * @param lang La langue à définir
   * @param navigate Indique s'il faut naviguer vers l'URL avec la langue (true par défaut)
   */
  setLanguage(lang: string, navigate: boolean = true): void {
    if (!this.supportedLangs.includes(lang)) {
      console.warn(`Language ${lang} is not supported, falling back to English`);
      lang = 'en';
    }
    
    // Mettre à jour la langue dans le service de traduction
    this.translate.use(lang);
    
    // Mettre à jour la BehaviorSubject
    this.currentLang.next(lang);
    
    // Sauvegarder la préférence de langue
    localStorage.setItem(this.LANG_KEY, lang);
    
    // Mettre à jour l'URL si nécessaire
    if (navigate) {
      this.navigateToLanguageRoute(lang);
    }
  }

  /**
   * Vérifier si une langue est supportée
   * @param lang La langue à vérifier
   */
  isLanguageSupported(lang: string): boolean {
    return this.supportedLangs.includes(lang);
  }

  /**
   * Extraire la langue de l'URL actuelle
   */
  private getLanguageFromUrl(): string | null {
    const path = this.location.path();
    const segments = path.split('/').filter(segment => segment);
    if (segments.length > 0 && this.supportedLangs.includes(segments[0])) {
      return segments[0];
    }
    return null;
  }

  /**
   * Naviguer vers la route avec la langue spécifiée
   * @param lang La langue pour la navigation
   */
  private navigateToLanguageRoute(lang: string): void {
    const path = this.location.path();
    const segments = path.split('/').filter(segment => segment);
    
    // Si l'URL a déjà un préfixe de langue, le remplacer
    if (segments.length > 0 && this.supportedLangs.includes(segments[0])) {
      segments[0] = lang;
    } else {
      // Sinon, ajouter le préfixe de langue
      segments.unshift(lang);
    }
    
    // Naviguer vers la nouvelle URL
    this.router.navigate([`/${segments.join('/')}`]);
  }
} 