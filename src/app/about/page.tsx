import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import { Suspense } from "react";

export default function AboutPage() {
  return (
    <>
      <h3>About page{new Date().toLocaleString()}</h3>
      <Suspense fallback={<h1>Loading Products...</h1>}>
        <Products />
      </Suspense>
      <Suspense fallback={<h1>Loading Reviews...</h1>}>
        <Reviews />
      </Suspense>
    </>
  );
}
