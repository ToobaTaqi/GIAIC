"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  url: string;
  description: string;
}

export default function Project({ title, url, description }: ProjectProps) {
  return (
    <motion.div
      initial={{ rotateY: 280 }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="border rounded p-3 gap-3 flex flex-col w-[300px] sm:w-[250px] project">
        <h3>{title}</h3>
        <a href={url} target="_blank">
          <h1 className="url">Visit</h1>
        </a>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
