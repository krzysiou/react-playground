import axios from 'axios';

import { config } from '@/config/config';

const { apiUrl } = config;

type Product = {
  name: string;
  price: number;
};

const fetchProducts = async (): Promise<Product[] | undefined> => {
  const { data } = await axios.get<Product[]>(`${apiUrl}/products`, {
    headers: {
      Authorization: `Bearer 123`,
    },
  });

  return data;
};

export { fetchProducts };
