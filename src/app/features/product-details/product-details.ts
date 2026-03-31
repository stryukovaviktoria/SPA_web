import { Component, Input } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product';

@Component({
  selector: 'cosm-details',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, DatePipe, UpperCasePipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent {
  @Input() id!: string;

  public product$!: Observable<Product | undefined>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const productId = Number(this.id);
    this.product$ = this.productService.getAll().pipe(
      map(items => items.find(p => p.id === productId))
    );
  }
}