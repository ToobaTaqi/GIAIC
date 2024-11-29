"use client";
import Heading from "@/components/heading";
import Project from "@/components/project";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center p-6 sm:p-3 mt-10 gap-10 ">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Heading name="Projects" />
      </motion.div>

      <div className="flex flex-wrap gap-3 sm:gap-10">
        <Project
          title="Resume Builder"
          url="https://giaic-q2hackathon1-milestone5.vercel.app/"
          description="A resume generator with shareable url and 'download as PDF' functionality"
        />

        <Project
          title="Figma Design to Next.js"
          url="https://figma-to-ui.vercel.app/"
          description="A Design created in Figma, Then Converted into Next.js Web App"
        />
      </div>
    </div>
  );
}
