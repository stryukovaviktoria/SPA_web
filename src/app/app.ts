import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header';
import { FooterComponent } from './core/footer/footer';
import { ProductListComponent } from './features/products/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
}