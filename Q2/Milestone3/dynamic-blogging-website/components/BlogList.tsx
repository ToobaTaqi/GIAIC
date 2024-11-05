import { blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

function BlogList() {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Frameworks And Libraries")}
          className={
            menu === "Frameworks And Libraries"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Frameworks And Libraries
        </button>
        <button
          onClick={() => setMenu("APIs And Backends")}
          className={
            menu === "APIs And Backends"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          APIs And Backends
        </button>
        <button
          onClick={() => setMenu("Best Practices")}
          className={
            menu === "Best Practices"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Best Practices
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 ">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
              />
            );
          })}
      </div>
    </div>
  );
}

export default BlogList;
