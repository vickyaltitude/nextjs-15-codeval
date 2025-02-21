type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

import { getProducts } from "@/prisma-db";

export default async function ProductsPage() {
  const products: Product[] = await getProducts();
  console.log(products);
  return (
    <>
      {products.map((prod) => (
        <ul key={prod.id}>
          <li>{prod.title}</li>
          <li>{prod.price}</li>
          <li>{prod.description}</li>
        </ul>
      ))}
    </>
  );
}
