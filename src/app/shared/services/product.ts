import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock-data';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private items: Product[] = [...PRODUCTS];

  getAll(): Product[] {
    return [...this.items];
  }

  getById(id: number): Product | undefined {
    return this.items.find(item => item.id === id);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  filterItems(searchQuery: string, selectedCategory: string): Product[] {
    const text = searchQuery.toLowerCase();

    return this.items.filter(item => {
      const matchesText = item.title.toLowerCase().includes(text);

      const matchesCategory =
        selectedCategory === 'All' ||
        item.category === selectedCategory;

      return matchesText && matchesCategory;
    });
  }
}