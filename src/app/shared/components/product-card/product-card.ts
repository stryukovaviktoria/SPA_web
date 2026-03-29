import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'cosm-card',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input({ required: true }) item!: Product;
}