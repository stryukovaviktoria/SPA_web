import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list';
import { ProductDetailsComponent } from './features/product-details/product-details';
import { NotFound } from './core/pages/not-found/not-found';
import { ProductFormComponent } from './features/product-form/product-form';
export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  { path: 'products', component: ProductListComponent },
{ path: 'product/new', component: ProductFormComponent },
  { path: 'product/:id', component: ProductDetailsComponent },

  { path: '**', component: NotFound }
];