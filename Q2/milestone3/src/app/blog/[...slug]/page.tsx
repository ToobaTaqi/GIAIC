import { client } from "@/sanity/lib/client";
import React from "react";
import { PortableText } from "next-sanity";

// export async function generateStaticParams() {
//   const slugs = await client.fetch(
//     `*[_type == "blog" && defined(slug.current)][].slug.current`
//   );
//   return slugs.map((slug: string) => ({
//     slug: [slug],
//   }));
// }

export default async function page({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}) {
  // const currentSlug = params.slug[0];
  const { slug } = await params;
  const blog = await client.fetch(
    `*[ _type == "blog" && slug.current == "${slug[0]}" ]
    { title, image { asset -> { _id, url }
    },
  _createdAt,
  author{_ref},
  body
  }`
  );
  // console.log("blog--", blog);
  // console.log("{slug}--", slug[0]);
  
  const author: {
    _id: string;
    authorName: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
    about?: string;
  }[] = await client.fetch(`*[_type == "author"] 
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

  // author.map((auth, index) => {
  //   if (auth._id === data.author._ref) {
  //     console.log("success found author");
  //     writterName = author[index].authorName;
  //     // console.log(writterName, "check name");
  //     authorImage = auth?.image?.asset?.url;
  //     authorAbout = auth.about;
  //   } else {
  //     console.log("author not found");
  //   }
  // });

  author.forEach(
    (auth: {
      _id: string;
      authorName: string;
      image?: {
        asset?: {
          url?: string;
        };
      };
      about?: string;
    }) => {
      if (auth._id === data.author._ref) {
        writterName = auth.authorName || "-";
        authorImage = auth?.image?.asset?.url || authorImage; // Use default if undefined
        authorAbout = auth.about || "";
      }
    }
  );

  return (
    <div className="flex flex-col px-5 gap-3 py-10">
      {/* <img src={data.image.asset.url} className="w-full h-[300px] cover" /> */}
      <img
        src={
          data?.image?.asset?.url ||
          "https://marketplace.canva.com/EAFHNkHvFsA/1/0/1600w/canva-grey-minimalist-tips-blog-banner-yR0ULIwVxyE.jpg"
        }
        alt="Blog Image"
        className="w-full h-[300px] object-cover rounded-lg"
      />

      {/* <h1 className="text-xl font-bold text-center">{data.title}</h1> */}
      {data?.title ? (
        <h1 className="text-xl font-bold text-center">{data.title}</h1>
      ) : (
        <p className="text-center text-red-500">Title not available</p>
      )}

      <p className="text-xs text-gray-500 text-end">
        {new Date(data._createdAt).toLocaleDateString()}
      </p>
      <div className="px-4 py-3">
        <PortableText value={data.body} />
      </div>
      {/* author details */}
      <div className="flex justify-center items-center gap-2 py-2">
        <img
          src={
            authorImage ||
            "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          }
          className="w-10 h-10 rounded"
        />
        <div className="flex flex-col justify-center ">
          <h2 className="text-sm font-bold">{writterName}</h2>
          <p className="text-xs italic">{authorAbout}</p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------

// import { client } from "@/sanity/lib/client";
// import React from "react";
// import { PortableText } from "next-sanity";

// export default async function page({
//   params,
// }: {
//   params: Record<string, any>;
// }) {
//   // Validate params
//   if (!params?.slug || !Array.isArray(params.slug) || params.slug.length === 0) {
//     return <div>Error: Blog slug not found.</div>;
//   }

//   const currentSlug = params.slug[0];

//   const blog = await client.fetch(
//         `*[ _type == "blog" && slug.current == "${currentSlug}" ]
//         { title, image { asset -> { _id, url }
//         },
//       _createdAt,
//       author{_ref},
//       body
//       }`
//       );

//   if (!blog) {
//     return <div>Blog not found.</div>;
//   }

//   const author = await client.fetch(`*[_type == "author"]
//     //     { _id,
//     //     authorName,
//     //     image{
//     //       asset->{
//     //         _id,
//     //         url
//     //       }
//     //     }, about}
//     //     `);

//   return (
//     <div className="flex flex-col px-5 gap-3 py-10">
//       <img
//         src={blog.image?.asset?.url || ""}
//         alt={blog.title}
//         className="w-full h-[300px] object-cover"
//       />
//       <h1 className="text-xl font-bold text-center">{blog.title}</h1>
//       <p className="text-xs text-gray-500 text-end">
//         {new Date(blog._createdAt).toLocaleDateString()}
//       </p>
//       <div className="px-4 py-3">
//         <PortableText value={blog.body} />
//       </div>
//       {/* Author details */}
//       {author && (
//         <div className="flex justify-center items-center gap-2 py-2">
//           <img
//             src={author.image?.asset?.url || ""}
//             alt={author.authorName}
//             className="w-10 h-10 rounded"
//           />
//           <div className="flex flex-col justify-center">
//             <h2 className="text-sm font-bold">{author.authorName}</h2>
//             <p className="text-xs italic">{author.about}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
