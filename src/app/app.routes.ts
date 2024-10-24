import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent, loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)}
];
