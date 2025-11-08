import React from "react";
import ExperianceCard from "./ExperianceCard";
import { motion } from "motion/react";

export default function ExperianceSection(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="md:max-w-9/10 lg:max-w-3/4 mx-auto flex flex-col items-center justify-center min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center font-bold mb-4 text-2xl sm:text-3xl md:text-4xl"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center my-5"
      >
        {props.data.work_experience.map((job, id) => (
          <ExperianceCard key={id} job={job} />
        ))}
      </motion.div>
    </motion.div>
  );
}
