import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'cosm-list',
  standalone: true,
  imports: [ProductCardComponent, FormsModule, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  public products$!: Observable<Product[]>;

  public searchQuery: string = '';
  public selectedCategory: string = 'All';

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  onFilterChange(): void {
    this.productService.updateFilter({
      query: this.searchQuery,
      category: this.selectedCategory
    });
  }

  handleCardAction(id: number): void {
    this.productService.deleteItem(id);
  }

  resetFilters(input: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';

    this.productService.updateFilter({
      query: '',
      category: 'All'
    });

    input.value = '';
    input.focus();
  }
}