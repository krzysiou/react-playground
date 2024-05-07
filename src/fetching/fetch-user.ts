interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const fetchProducts = async (): Promise<Product[] | undefined> => {
  const products = await fetch(`/api/products`);

  return products.json();
};

export { fetchProducts, type Product };
