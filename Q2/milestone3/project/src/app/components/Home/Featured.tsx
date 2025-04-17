"use client"
import React, { useEffect, useState } from "react";
import Card from "../Product/Card";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export default function Featured() {

  type ProductType = {
      _id: string;
      title: string;
      _updatedAt: string;
      image: { asset: { _id: string; url: string } };
      originalprice: number;
      saleprice: number;
      // category: { title: string; _id: string };
      // bestseller: boolean;
      featured: boolean;
      description: string;
      // tags: string[];
    };
  
    const [products,setProducts]=useState<ProductType[]>([])
  
     useEffect(() => {
        // if (!productId) return;
    
        async function fetchProduct() {
          try {
            const response = await client.fetch(
              // `*[_type == "product" && _id == "${productId}"]`
              `*[_type == "product" ]{
      _id, description, originalprice, image{asset->{_id,url}, featured, saleprice }
    }`
            );
            console.log(response)
            setProducts(response)
            // setProduct(response[0]);
          } catch (error) {
            console.error("Error fetching product:", error);
          }
        }
    
        fetchProduct();
      }, []);
  

  return (
    <section className=" flex flex-col gap-6 items-center">
      <h2 className="text-xl font-bold">Featured Products</h2>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {/* yaham map lgega */}
        {
                 products.map((product, index) => (
                   <Card key={product._id} href={product._id} img={product.image.asset.url} title={product.title} date={product._updatedAt} originalPrice={product.originalprice} salePrice={product.saleprice}/>
                 ))
               }
      </div>
      <Link href="/products" className="self-end text-gray-600 text-sm bg-gray-100 hover:bg-gray-300 px-3 py-2 rounded">View All Products</Link>
    </section>
  );
}
