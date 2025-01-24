// app/page.tsx
import FetchBlogs from "@/components/FetchBlogs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 px-5 py-3 ">
      {/* <Navbar /> */}
      <FetchBlogs />
    </div>
  );
}
