import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from '../../../shared/mock-data';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'cosm-list',
  standalone: true,
  imports: [ProductCardComponent, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  public allProducts = PRODUCTS;
  public filteredProducts = PRODUCTS;

  public searchQuery: string = '';
  public selectedCategory: string = 'All';

  filterItems(): void {
    const text = this.searchQuery.toLowerCase();

    this.filteredProducts = this.allProducts.filter(item => {
      const matchesText = item.title.toLowerCase().includes(text);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        item.category === this.selectedCategory;

      return matchesText && matchesCategory;
    });
  }

  handleCardAction(id: number): void {
    console.log('Користувач натиснув кнопку на товарі з ID:', id);
  }

  resetFilters(input: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.filteredProducts = this.allProducts;

    input.value = '';
    input.focus();
  }
}