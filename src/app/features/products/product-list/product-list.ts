import { Component } from '@angular/core';
import { PRODUCTS } from '../../../shared/mock-data';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'cosm-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  public items = PRODUCTS;
}