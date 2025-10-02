import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/home/login/login';
import { Register } from './components/home/register/register';
import { Faq } from './components/home/faq/faq';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'faq', component: Faq },
    {path: 'contact', loadComponent: () => import('./components/home/contact/contact').then(m => m.Contact) },   
    { path: 'register', component: Register },
    { path: '**', redirectTo: '' }  // Redirection pour les routes inexistantes
];
