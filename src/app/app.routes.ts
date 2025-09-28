import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home },  // Route racine
    { path: 'home', component: Home },
    { path: '**', redirectTo: '' }  // Redirection pour les routes inexistantes
];
