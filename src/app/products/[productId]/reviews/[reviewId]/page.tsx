import { notFound } from "next/navigation";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const reviewId = (await params).reviewId;
  const productId = (await params).productId;

  if (Number(reviewId) > 1000) {
    notFound();
  }
  return (
    <h3>
      This is {productId}'s review page {reviewId}
    </h3>
  );
}
