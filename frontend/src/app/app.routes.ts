import { Routes } from '@angular/router';
import { Collections } from './collections/collections';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'collections',
    component: Collections,
  },
];
