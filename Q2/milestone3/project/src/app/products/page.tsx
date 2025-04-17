"use client"
import React, { useEffect, useState } from "react";
import Card from "../components/Product/Card";
import { client } from "@/sanity/lib/client";

export default function page() {

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
    <section className="w-[90vw] mx-auto py-5 flex flex-col gap-6">
      {/* yahan b map lgega products fetch krne k bd show krne k lye */}
      <h2 className="font-bold text-xl">All Products</h2>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {
          products.map((product, index) => (
            <Card key={product._id} href={product._id} img={product.image.asset.url} title={product.title} date={product._updatedAt} originalPrice={product.originalprice} salePrice={product.saleprice}/>
          ))
        }
        {/* <Card /> */}
        {/* <Card /> */}
      </div>
    </section>
  );
}
