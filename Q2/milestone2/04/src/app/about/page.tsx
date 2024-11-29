"use client";
import { motion } from "framer-motion";
import Heading from "@/components/heading";

export default function About() {
  return (
    <div id="about" >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Heading name="About" />
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-12 justify-center items-center sm:ml-5 w-98vw"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          className="h-[200px]"
          src="https://cdn-icons-png.flaticon.com/512/6135/6135663.png"
          alt=""
        />
        <motion.div
          className="w-[60%] sm:w-full flex flex-col justify-center items-center pl-5 gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
        >
          <p className="w-full">
            I specialize in developing full-stack web applications that combine
            stunning design with seamless performance and exceptional user
            experience.
          </p>
          <div className="flex items-center justify-center gap-2 text-left">
            <span>Hire Me on:</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://www.upwork.com/freelancers/~0160a64bf41abe0360?mp_source=share"
                target="blank"
              >
                Upwork
              </a>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="tech p-5 gap-5 flex flex-col w-full ml-9 sm:ml-0 justify-center text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p>Here are few technologies I've been working with recently</p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          [ "JavaScript/TypeScript", "Node.js", "React.js", "Next.js", "MongoDB", "CSS / TailwindCSS / BootStrap5" ]
        </motion.span>
      </motion.div>
    </div>
  );
}
