import { client } from "@/sanity/lib/client";
// import BlogList from "./BlogList";

async function fetchBlogs() {
  const blogs = await client.fetch("*[_type=='blog']");
  console.log(blogs);
  //   return <BlogList blogs={blogs} />;
  return blogs;
}
export default fetchBlogs;
