"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export default function BlogList({
  blogs,
}: {
  blogs: [
    {
      _id: string;
      title: string;
      summary: string;
      _createdAt: string;
      image: any;
      slug: { current: string }
    },
  ];
}) {
  const [list, setList] = useState(blogs);
  // console.log("list", list);
  // console.log("blogs", blogs[0].slug);

  useEffect(() => {
    setList(blogs);
  }, [list]);

  return (
    <div className="flex flex-wrap gap-5">
      {/* <h1>list</h1> */}
      {list.map((blog, index) => (
        <Link href={`blog/${blog.slug.current}`} key={index}>
            {/* <p>slug:{blog.slug.current}</p> */}
          <BlogCard
            image={urlForImage(blog.image)}
            title={blog.title}
            summary={blog.summary}
            date={blog._createdAt}
          />
        </Link>
      ))}
    </div>
  );
}
