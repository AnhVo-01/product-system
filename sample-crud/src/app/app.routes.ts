import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./module/auth/page-not-found/page-not-found.component";

export const routes: Routes = [
  {path: 'product', loadChildren: () => import('./module/product/product.module').then(m => m.ProductModule)},
  {path: 'auth', loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)},
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
