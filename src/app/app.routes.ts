import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    {path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.Contact) },   
    { path: 'register', component: Register },
    { path: '**', redirectTo: '' }  // Redirection pour les routes inexistantes
];
