// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  return NextResponse.json(products);
}
