import { Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { AboutComponent } from './componets/about/about.component';
import { CreateBinComponent } from './componets/create-bin/create-bin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create', component: CreateBinComponent },
  { path: 'about', loadComponent:()=> import('./componets/about/about.component').then(mod => mod.AboutComponent) },
  {path:'', redirectTo:'/login',pathMatch:"full"},
  {path:'**', component:NotFoundComponent}
];
 