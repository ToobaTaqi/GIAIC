"use client";
import Heading from "@/components/heading";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Contact() {
  return (
    <div id="contact">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Heading name="Contact Me" />
      </motion.div>

      <div id="contactDetails">
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <p className="braces">{"{"}</p>
            <p>name : Tooba Taqi </p>
            <p>email : toobtq@gmail.com</p>
            <p>gender : Female </p>
            <p>Location : Karachi, Pakistan</p>
            <p className="braces">{"}"}</p>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <img
              className="w-[400px] sm:w-[1000px]"
              src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912018.png"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <div className=" flex sm:flex-col gap-3 justify-center items-center">
        <a
          className="icon"
          href="https://www.linkedin.com/in/mernstackwebdeveloper/"
          target="blank"
        >
          <FaLinkedin />
        </a>

        <a className="icon" href="https://github.com/ToobaTaqi" target="blank">
          <FaSquareGithub />
        </a>
      </div>
    </div>
  );
}
