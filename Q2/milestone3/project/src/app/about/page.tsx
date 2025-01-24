import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="flex flex-col gap-5 py-5 w-[90vw] mx-auto">
      <h1 className="font-bold text-xl ">About Us</h1>
      <img
        src="https://www.shutterstock.com/image-photo/traveler-walking-along-road-mountains-600nw-173564057.jpg"
        alt=""
        className="w-[90vw] h-[300px] bg-red-400 object-cover"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque neque
        magnam animi tempore qui nam unde beatae, earum molestias aliquid,
        aliquam possimus aut accusamus? Eum facilis ipsum natus laboriosam
        laborum suscipit quia earum, pariatur sequi, molestias minima impedit
        explicabo dicta sit corporis, officia eveniet libero? Et a dolorum
        consequuntur non minima est pariatur! Ut sequi harum ducimus voluptas
        facilis et odio pariatur nesciunt? At dignissimos odit id ducimus, earum
        reprehenderit aspernatur doloremque numquam necessitatibus, quisquam
        suscipit maxime perspiciatis! Perferendis, hic.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
        dignissimos, commodi eius nemo quasi tempora laudantium veniam
        exercitationem. Possimus assumenda in quos impedit et. Dolor itaque eos
        architecto! Incidunt, reiciendis consectetur voluptas veniam
        consequuntur esse et repudiandae dignissimos nostrum vitae cumque
        reprehenderit hic doloribus quae! Reprehenderit reiciendis, facilis cum
        incidunt eligendi ratione quidem architecto ipsa in hic ullam aspernatur
        obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur enim
        qui eligendi iste atque! Quidem totam, quam atque eveniet omnis quo
        ullam ad. A beatae quo tenetur, in tempora eligendi.
      </p>

      <div className="flex justify-center items-center gap-3">
        <h3 className="text-gray-500 italic text-sm">Conect us on Social Media</h3>
        <Link href="https://www.facebook.com/" target="blank">
          <img
            src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png"
            alt=""
            className="w-[30px] h-[30px]"
          />
        </Link>
        <Link href="https://www.instagram.com/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
        </Link>
      </div>
    </section>
  );
}
