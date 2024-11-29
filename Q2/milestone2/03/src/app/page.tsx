"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-row-reverse sm:flex-col justify-center items-center px-32 p-6 sm:p-3 sm:px-0 mx-20 sm:mx-0 mt-10">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="p-4"
      >
        <div>
          <img
            // src="/me.png"
            src="https://png.pngtree.com/png-vector/20220907/ourmid/pngtree-happy-woman-works-on-laptop-in-cozy-autumn-home-office-vector-png-image_33669896.png"
            alt="Profile Picture"
            width={600}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" , delay: 0.3 }}
        className="p-4"
      >
        <div className="flex flex-col gap-4 ">
          <p>Hi, I'm</p>
          <h2>Tooba Taqi</h2>
          <h3>Full Stack Developer</h3>
          <p className="w-[60%] sm:w-full">
            I deliver innovative and scalable solutions that meet diverse user
            needs and significantly enhance digital experiences
          </p>
          <Link href="/projects">
            <button className="text-left">See My Work</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
