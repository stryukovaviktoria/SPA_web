import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';
import { ProductService } from '../../../shared/services/product';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'cosm-list',
  standalone: true,
  imports: [ProductCardComponent, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  public filteredProducts: Product[] = [];
  public searchQuery: string = '';
  public selectedCategory: string = 'All';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.filteredProducts = this.productService.getAll();
  }

  filterItems(): void {
    this.filteredProducts = this.productService.filterItems(
      this.searchQuery,
      this.selectedCategory
    );
  }

  handleCardAction(id: number): void {
    this.productService.deleteItem(id);
    this.filterItems();
  }

  resetFilters(input: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.filteredProducts = this.productService.getAll();

    input.value = '';
    input.focus();
  }
}