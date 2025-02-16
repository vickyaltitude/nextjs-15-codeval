"use client";
import { useState } from "react";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inpVal, setInpVal] = useState("");
  return (
    <>
      {children}
      <input value={inpVal} onChange={(e) => setInpVal(e.target.value)} />
    </>
  );
}
