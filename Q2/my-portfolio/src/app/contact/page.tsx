"use client";

import Heading from "@/components/heading";
export default function Contact() {
  return (
    <div className="flex flex-col justify-center p-6 mt-10 gap-10">
      <Heading name="Contact Me" />

      <div className="flex justify-center items-center gap-[25%]">
        <div className="flex flex-col gap-3">
          <p className="braces">{"{"}</p>
          <p>name : Tooba Taqi </p>
          <p>email : toobtq@gmail.com</p>
          <p>gender : Female </p>
          <p>Location : Karachi, Pakistan</p>
          <p className="braces">{"}"}</p>
        </div>

        <div className=" flex flex-col gap-3 items-center">
          <button>
            <a
              href="https://www.linkedin.com/in/mernstackwebdeveloper/"
              target="blank"
            >
              Linkedin
            </a>
          </button>
          <button>
            <a href="https://github.com/ToobaTaqi" target="blank">
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
