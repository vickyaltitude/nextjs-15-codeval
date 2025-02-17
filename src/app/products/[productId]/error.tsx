"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ProductError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  function reload() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }
  return (
    <>
      <h3>Oh.! oh.! We re sorry {error.message}</h3>
      <button onClick={reload}>Retry</button>
    </>
  );
}
