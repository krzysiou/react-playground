'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import type { Product } from '@/fetching/fetch-user';

import { Example2Styled, CardStyled } from './Example2.styles';
import { fetchProducts } from '@/fetching/fetch-user';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product: { name, price, imageUrl } }) => (
  <CardStyled>
    <Image src={imageUrl} alt="Product card" width={150} height={200} />
    <div className="info">
      <p className="price">{name}</p>
      <p className="price">{price}$</p>
    </div>
  </CardStyled>
);

const Example2: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((fetchedProducts) => setProducts(fetchedProducts));
  }, []);

  return (
    <Example2Styled>
      <p className="hero">Shop</p>
      <div className="cards">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Example2Styled>
  );
};

export { Example2 };
