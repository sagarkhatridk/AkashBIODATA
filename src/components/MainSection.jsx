import React from "react";
import { motion } from "framer-motion";
import akashImg from "../assets/Images/akash.jpg";

export default function MainSection(props) {
  return (
    <div className="relative flex flex-col items-center justify-start  pt-4 bg-white text-center">
      <div className="relative w-full flex flex-col items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={akashImg}
          alt="Akash Khatri"
          className="object-cover rounded-lg -rotate-3 drop-shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute inset-x-0 -bottom-20"
        >
          <h1 className="flex items-center justify-center text-4xl sm:text-6xl md:text-7xl font-serif font-bold z-10 tracking-wide">
            {props.data.name}
          </h1>
          <p className="mt-2 text-2xl text-gray-700 z-20 font-bold">
            {props.data.current_position}
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-32 px-4 max-w-3xl"
      >
        {/* <p className="text-lg text-gray-700">
          Currently working at Accenture, building efficient data pipelines and
          optimizing data workflows. I have a passion for playing chess and
          excel at SQL, Python, and Snowflake. I'm also deeply interested in web
          development with React, Next.js, and Node.js, and I'm enthusiastic
          about exploring the world of machine learning.
        </p> */}
      </motion.div>
    </div>
  );
}
