import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    // Détecte la langue du navigateur ou utilise 'en' par défaut
    const browserLang = navigator.language.split('-')[0];
    const lang = ['fr', 'en'].includes(browserLang) ? browserLang : 'en';

    return of(false).pipe(
      tap(() => {
        // Redirige vers la page avec le préfixe de langue
        this.router.navigate([`/${lang}`]);
      })
    );
  }
} 