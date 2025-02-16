import { Metadata } from "next";

type props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `This is product ${id}`,
  };
};

export default async function ProductDetail({ params }: props) {
  const productId = (await params).productId;
  const randomInt = Math.floor(Math.random() * 4);
  if (randomInt === 1) throw new Error("Failed fetching this component");

  return <h3>This is product {productId} detail page</h3>;
}
