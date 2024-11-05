import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { title } from "process";
import blogModel from "@/lib/config/models/blog.model";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function GET(req: any) {
  //   console.log("Blog GET Hit");
  return NextResponse.json({ msg: "APi Working" });
}

export async function POST(req: any, res: any) {
  const formData = await req.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  //   console.log(image);

  const imageByteData = await image.arrayBuffer();
  //   console.log(imageByteData);

  const buffer = Buffer.from(imageByteData);
  //   console.log(buffer);

  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgURL = `/${timestamp}_${image.name}`;
  //   console.log(imgURL);

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgURL}`,
    author_img: `${formData.get("author_img")}`,
  };

  await blogModel.create(blogData);

  return NextResponse.json({ success: true, msg: "Blog Added" });
}
