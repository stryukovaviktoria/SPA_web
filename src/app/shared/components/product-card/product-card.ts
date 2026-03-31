import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { StatusColorPipe } from '../../pipes/status-color-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { TruncatePipe } from '../../pipes/truncate-pipe';
@Component({
  selector: 'cosm-card',
  standalone: true,
  imports: [
  UpperCasePipe,
  CurrencyPipe,
  DatePipe,
  RouterLink,
  TruncatePipe, StatusColorPipe, HighlightDirective
],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input({ required: true }) item!: Product;

  @Output() addToCart = new EventEmitter<number>();

  onBtnClick(): void {
    this.addToCart.emit(this.item.id);
  }
}