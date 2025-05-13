import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanguageGuard } from './guards/language.guard';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 80], // Décalage pour tenir compte de la navbar fixe
  useHash: true // Activer le hash routing pour éviter les erreurs 404 au rafraîchissement
};

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [LanguageGuard],
    children: []
  },
  {
    path: ':lang',
    component: HomeComponent,
    children: []
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 