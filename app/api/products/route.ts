import { NextResponse } from 'next/server';

import type { Product } from '@/fetching/fetch-user';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'T-shirt',
    price: 6.99,
    imageUrl:
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=3314&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Shoes',
    price: 12.99,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Jacket',
    price: 5.99,
    imageUrl:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    name: 'Shirt',
    price: 6.99,
    imageUrl:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=3064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '5',
    name: 'Jeans',
    price: 8.99,
    imageUrl:
      'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '6',
    name: 'Pants',
    price: 11.99,
    imageUrl:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=3397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '7',
    name: 'Longsleeve',
    price: 17.99,
    imageUrl:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=3472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '8',
    name: 'T-shirt',
    price: 8.99,
    imageUrl:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '9',
    name: 'Jacket',
    price: 5.99,
    imageUrl:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '10',
    name: 'Pants',
    price: 11.99,
    imageUrl:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=3397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '11',
    name: 'Longsleeve',
    price: 17.99,
    imageUrl:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=3472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '12',
    name: 'Shoes',
    price: 12.99,
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export async function GET() {
  return NextResponse.json(mockProducts);
}
