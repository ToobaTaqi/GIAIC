"use client";
import Heading from "@/components/heading";

export default function About() {
  return (
    <div className="flex flex-col justify-center p-6 mt-10 gap-10">
      <Heading name="About" />

      <div className="flex flex-wrap gap-8 justify-center items-center ml-5 w-98vw">
        <img
          className="h-[200px]"
          src="https://cdn-icons-png.flaticon.com/512/6135/6135663.png"
          alt=""
        />
        {/* <iframe
          className="h-[300px] "
          src="https://lottie.host/embed/52ceae0c-5c2c-4097-a323-6e09ab9b3437/B2hdRXt5xE.json"
        ></iframe> */}

        <div className="w-[60%] flex flex-col justify-center items-center pl-5 gap-3">
          <p className="w-full">
            I specialize in developing full-stack web applications that combine
            stunning design with seamless performance and exceptional user
            experience.
          </p>
          <div className="flex items-center justify-center gap-2 text-left">
            <span>Hire Me on:</span>
            <button>
              <a
                href="https://www.upwork.com/freelancers/~0160a64bf41abe0360?mp_source=share"
                target="blank"
              >
                Upwork
              </a>
            </button>
            <button>
              {" "}
              <a
                href="https://www.freelancer.com/u/ToobaaTaqi?frm=ToobaaTaqi&sb=t"
                target="blank"
              >
                Freelancer
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="tech p-5 gap-5 flex flex-col w-full ml-9 justify-center text-left">
        <p>Here are few technologies I've been working with recently</p>
        <span>
          [ "JavaScript/TypeScript " , " Node.js " , " React.js " , " Next.js "
          , " MongoDB " , " CSS / TailwindCSS / BootStrap5" ]
        </span>
      </div>
    </div>
  );
}
