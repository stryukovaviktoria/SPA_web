import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PRODUCTS } from '../mock-data';
import { Product } from '../models/product';
import { FilterOptions } from '../models/filter-options';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private items: Product[] = [...PRODUCTS];


  private itemsSubject$ = new BehaviorSubject<Product[]>(this.items);
  public items$ = this.itemsSubject$.asObservable();


  private filterSubject$ = new BehaviorSubject<FilterOptions>({
    query: '',
    category: 'All'
  });

  constructor() {
    this.filterSubject$.subscribe(options => {
      const filtered = this.items.filter(item => {
        const matchesQuery = item.title
          .toLowerCase()
          .includes(options.query.toLowerCase());

        const matchesCategory =
          options.category === 'All' ||
          item.category === options.category;

        return matchesQuery && matchesCategory;
      });

      this.itemsSubject$.next(filtered);
    });
  }

  getAll() {
    return this.items$;
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    this.filterSubject$.next(this.filterSubject$.value);
  }

  updateFilter(options: FilterOptions): void {
    this.filterSubject$.next(options);
  }
}