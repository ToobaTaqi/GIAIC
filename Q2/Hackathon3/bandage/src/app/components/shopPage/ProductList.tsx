"use client";
import React, { useState, useEffect } from "react";
import Featured from "../homepage/Featured";
import Link from "next/link";

export default function ProductList() {
  type image = {
    asset: {
      _id: string;
      url: String;
    };
  };
  type Category = {
    title: string;
    _id: string;
  };

  type Products = {
    _id: string;
    title: string;
    _updatedAt: string;
    productImage: image;
    price: number;
    dicountPercentage: number;
    category: Category|null;
    bestseller: boolean;
  };

  const [products, setProducts] = useState<Products[]>([]);
  const chunkSize = 4; // Number of products per page
  const [chunks, setChunks] = useState<Products[][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product").then((res) => res.json());

        // Split into chunks of `chunkSize`
        const chunkedData = [];
        for (let i = 0; i < response.length; i += chunkSize) {
          chunkedData.push(response.slice(i, i + chunkSize));
        }

        setProducts(response);
        setChunks(chunkedData);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle page change
  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-20 flex flex-col  items-center gap-[48px] w-[80vw] lg:w-[75vw]  mx-auto">

      <div className="flex flex-col gap-14 lg:gap-[30px] lg:flex-row">
        {chunks[currentPage]?.map((product: Products) => (
          <Featured
            key={product._id}
            href={product._id}
            title={product.title}
            img={
              product.productImage?.asset?.url ??
              "https://cdn.sanity.io/images/oywqmg2v/production/2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png"
            }
            category={product.category?.title? product.category.title :"WOMEN"}
            price={product.price}
            dicountPrice={
              typeof product.price === "number" &&
              typeof product.dicountPercentage === "number"
                ? product.price -
                  (product.price * product.dicountPercentage) / 100
                : product.price
            }
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap rounded border-[#E8E8E8] gap-0 w-auto mt-8 shadow">
        <button
          // className="text-[#BDBDBD] text-sm border-r-[1px] p-[25px]"
          className={`text-[#BDBDBD] text-sm border-r-[1px] p-[25px] ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-white hover:bg-[#23A6F0]"}`}
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          First
        </button>
        {chunks.map((_, index) => (
          <button
            key={index}
            className={`${
              index === currentPage
                ? "text-white bg-[#23A6F0]"
                : "text-[#23A6F0] font-bold"
            } border-r-[1px] py-[25px] px-[20px] hover:text-white hover:bg-[#23A6F0]`}
            onClick={() => handlePageChange(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          // className="text-[#23A6F0] font-bold p-[25px]"
          className={`text-[#23A6F0] font-bold p-[25px] ${currentPage === chunks.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:text-white hover:bg-[#23A6F0]"}`}
          disabled={currentPage === chunks.length - 1}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}
