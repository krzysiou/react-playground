import axios from 'axios';

import { config } from '@/config/config';

const { apiUrl, apiToken } = config;

type Product = {
  name: string;
  price: number;
};

const fetchProducts = async (): Promise<Product[] | undefined> => {
  const { data } = await axios.get<Product[]>(`${apiUrl}/products`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  return data;
};

export { fetchProducts };
