"use client";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Post from "@/components/Post";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="flex flex-col gap-9">
      <Navbar />
      <Home />
      <Post />
      <Featured />
      <Footer />
    </div>
  );
}
