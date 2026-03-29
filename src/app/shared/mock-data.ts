import { Product, ProductCategory } from './models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Lipstick Velvet Rose',
    description: 'Стійка матова помада для щоденного макіяжу.',
    imageUrl: 'https://u.makeup.com.ua/r/re/reujzbdkka3n.jpg',
    price: 320,
    createdAt: new Date('2024-01-12'),
    category: ProductCategory.Makeup,
    tags: ['matte', 'red'],
    isDiscount: true,
    author: { name: 'BeautyLab' }
  },
  {
    id: 2,
    title: 'Hydra Face Cream',
    description: 'Зволожувальний крем для сухої та комбінованої шкіри.',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSeUDR2D9xNzlox0JZiVgzOqUxVeumsn2uIvdIFYNJnkI_alWjnubsN1w0yZHpVNZpqHVgTMOhA2c6OKU1McpRI2k52dhlfzWfW1hBObINHlykYuX6ym_PSYw',
    price: 540,
    createdAt: new Date('2024-02-10'),
    category: ProductCategory.Skincare,
    tags: ['hydration', 'cream'],
    isDiscount: false,
    author: { name: 'SkinCare Pro' }
  },
  {
    id: 3,
    title: 'Hair Repair Mask',
    description: 'Відновлювальна маска для пошкодженого волосся.',
    imageUrl: 'https://u.makeup.com.ua/i/ib/ibvydjre6lrp.jpg',
    price: 460,
    createdAt: new Date('2024-03-01'),
    category: ProductCategory.Hair,
    tags: ['repair', 'hair'],
    isDiscount: true,
    author: undefined   
  },
  {
    id: 4,
    title: 'Glow Highlighter',
    description: 'Легкий хайлайтер для сяючого фінішу.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTd6DgR-Sh6UdJB63xVQZaCIxOos9NoCBJcw&s',
    price: 390,
    createdAt: new Date('2024-03-15'),
    category: ProductCategory.Makeup,
    tags: ['glow', 'shine'],
    isDiscount: false,
    author: { name: 'Shine Studio' }
  },
  {
    id: 5,
    title: 'Aloe Cleansing Gel',
    description: 'Очищувальний гель з алое для щоденного догляду.',
    imageUrl: 'https://u.makeup.com.ua/z/zi/zizxja4obvnt.jpg',
    price: 280,
    createdAt: new Date('2024-04-05'),
    category: ProductCategory.Skincare,
    tags: ['cleanser', 'aloe'],
    isDiscount: true,
    author: { name: 'Fresh Skin' }
  },
  {
    id: 6,
    title: 'Luxury Hair Oil',
    description: 'Поживне масло для блиску та здоров’я волосся.',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS42OJIyirQgB02_3_LKQA_DHQ3-hL68aroI_l0LlKXDMhkjh2v_I7rWsIw7C-ipAT1ikp0w1yugLgmEhWe5xf_zZStyfusr7rr_BTeM8Hn_claI0KqHLSm6Q',
    price: 720,
    createdAt: new Date('2024-04-20'),
    category: ProductCategory.Hair,
    tags: ['oil', 'shine'],
    isDiscount: false,
    author: { name: 'HairCare Elite' }
  }
];