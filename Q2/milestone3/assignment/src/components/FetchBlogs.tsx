import { client } from "@/sanity/lib/client";
import BlogList from "./BlogList";

export default async function FetchBlogs() {
  const blogs = await client.fetch("*[_type=='blog']");
  // console.log(blogs);
    return <BlogList blogs={blogs} />;
//   return blogs;
}
