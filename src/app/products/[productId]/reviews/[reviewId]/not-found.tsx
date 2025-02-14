"use client";

import { usePathname } from "next/navigation";
//not found function dont receive any props so we use usepathname hook if we want to access param

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <h2>
      Review {reviewId} not found for product {productId}
    </h2>
  );
}
