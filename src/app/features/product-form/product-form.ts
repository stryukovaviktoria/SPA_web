import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../../shared/services/product';
import { forbiddenNameValidator } from '../../shared/validators/custom.validators';

@Component({
  selector: 'cosm-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent {
  // Використовуємо inject() замість конструктора для уникнення помилок ініціалізації
  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private router = inject(Router);

  // Тепер fb доступний відразу при створенні властивості form
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/test/i)]],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    category: ['Makeup', Validators.required],
    imageUrl: ['', [Validators.required, Validators.pattern('https?://.+')]]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      // Можна додати маркування всіх полів як "торкнутих", щоб показати помилки
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.value;

    const newItem = {
      id: Date.now(),
      createdAt: new Date(),
      tags: [],
      author: { name: 'New Brand' },
      isDiscount: false,
      title: formValue.title,
      description: formValue.description,
      price: formValue.price,
      category: formValue.category,
      imageUrl: formValue.imageUrl
    };

    // Використовуємо newItem для збереження
    this.productService.addItem(newItem as any);

    // Перенаправлення після успішного додавання
    this.router.navigate(['/products']);
  }
}