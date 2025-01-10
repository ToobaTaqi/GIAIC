import { client } from "@/sanity/lib/client";
import React from "react";
import { PortableText } from "next-sanity";

export default async function BlogPage({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const currentSlug = params.slug[0];
  const blog = await client.fetch(
    `*[ _type == "blog" && slug.current == "${currentSlug}" ]
    { title, image { asset -> { _id, url }
    },
  _createdAt,
  author{_ref},
  body
  }`
  );
  const author = await client.fetch(`*[_type == "author"] 
    { _id,
    authorName, 
    image{
      asset->{
        _id,
        url
      }
    }, about} 
    `);

  const data = blog[0];

  let writterName = "-";
  let authorImage =
    "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"; //default image
  let authorAbout = "";

  // console.log("authorimagetesting:", author[0].image.asset.url);
  author.map((auth, index) => {
    // console.log(auth._id);
    // console.log("the author",auth)
    if (auth._id === data.author._ref) {
      console.log("success found author");
      writterName = author[index].authorName;
      // console.log(writterName, "check name");
      authorImage = auth?.image?.asset?.url;
      authorAbout = auth.about;
    } else {
      console.log("author not found");
    }
  });
  console.log("details", writterName, authorImage);

  return (
    <div className="flex flex-col px-5 gap-3 py-10">
      <img src={data.image.asset.url} className="w-full h-[300px] cover" />

      <h1 className="text-xl font-bold text-center">{data.title}</h1>
      <p className="text-xs text-gray-500 text-end">
        {new Date(data._createdAt).toLocaleDateString()}
      </p>
      <div className="px-4 py-3">
        <PortableText value={data.body} />
      </div>
      {/* author details */}
      <div className="flex justify-center items-center gap-2 py-2">
        <img src={authorImage} className="w-10 h-10 rounded" />
        <div className="flex flex-col justify-center ">
          <h2 className="text-sm font-bold">{writterName}</h2>
          <p className="text-xs italic">{authorAbout}</p>
        </div>
      </div>
    </div>
  );
}
