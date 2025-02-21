import { addProduct } from "@/prisma-db";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, price, description } = body;
  const product = await addProduct(title, parseInt(price), description);
  return new Response(JSON.stringify(product), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
