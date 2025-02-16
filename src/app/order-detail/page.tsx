"use client";
import { useRouter } from "next/navigation";

export default function OrderDetails() {
  const route = useRouter();
  function handleOrder() {
    route.push("/");
  }
  return (
    <>
      {" "}
      <h2>This is order details page</h2>
      <button onClick={handleOrder}>Confirm order</button>
    </>
  );
}
