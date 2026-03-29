import { Product, ProductCategory } from './models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Lipstick',
    description: 'Matte red lipstick',
    imageUrl: 'https://via.placeholder.com/150',
    price: 300,
    createdAt: new Date('2024-01-01'),
    category: ProductCategory.Makeup,
    tags: ['red', 'matte']
  },
  {
    id: 2,
    title: 'Face Cream',
    description: 'Moisturizing cream',
    imageUrl: 'https://via.placeholder.com/150',
    price: 500,
    createdAt: new Date('2023-12-01'),
    category: ProductCategory.Skincare,
    tags: ['hydration']
  }
];