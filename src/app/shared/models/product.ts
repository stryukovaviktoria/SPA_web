export enum ProductCategory {
  Makeup = 'Makeup',
  Skincare = 'Skincare',
  Hair = 'Hair'
}

export interface ProductAuthor {
  name: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  createdAt: Date;
  category: ProductCategory;
  tags: string[];
  isDiscount?: boolean;
  author?: ProductAuthor;
}