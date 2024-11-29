"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div id="home" >
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
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="p-4"
      >
        <div id="homeContent">
          <p>Hi, I'm</p>
          <h2>Tooba Taqi</h2>
          <h3>Full Stack Developer</h3>
          <p >
            I deliver innovative and scalable solutions that meet diverse user
            needs and significantly enhance digital experiences
          </p>
          <Link href="/projects">
            <button >See My Work</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
