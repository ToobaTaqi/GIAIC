import { client } from "@/sanity/lib/client";

async function fetchBlogs() {
  const blogs = await client.fetch("*[_type=='blog']");
  // console.log(blogs);
  return blogs;
}
export default fetchBlogs;
