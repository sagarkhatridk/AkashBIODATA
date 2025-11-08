import React from "react";
import { motion } from "motion/react";

const CertificationSection = ({ certifications }) => {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <motion.h2
        className="text-center font-bold mb-4 text-2xl sm:text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: index * 0.01 }}
            viewport={{ once: true }}
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-gray-700 hover:text-gray-900 hover:transition-colors duration-200"
            >
              {cert.certification_name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
