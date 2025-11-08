import React from "react";
import { motion } from "motion/react";

const BioDataInformation = () => {
  const biodata = [
    { label: "Name", value: "Khatri Akash Ileshkumar" },
    { label: "Age", value: "24 Years" },
    { label: "Date of Birth", value: "28th February 2001" },
    { label: "Mother", value: "Dakshaben Ileshkumar Khatri (Housewife)" },
    { label: "Father", value: "Ileshkumar Vinodchandra Khatri (RIP)" },
    { label: "Sister", value: "Riya Khatri (Married)" },
    { label: "Education", value: "Diploma in Embroidery Design" },
    { label: "Work", value: "Embroidery Designer (Sketcher)" },
    { label: "Height", value: "5'5\"" },
    { label: "Weight", value: '60"' },
    { label: "Nationality", value: "Indian" },
    { label: "Religion", value: "Hindu" },
    { label: "Mother Tongue", value: "Gujarati" },
    { label: "Hobbies", value: "Designing, Sketching, Reading" },
  ];

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
        Bio Data Information
      </motion.h2>

      <div className="space-y-6">
        {biodata.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="text-lg font-semibold text-gray-700">
              {item.label}:{" "}
              <span className="font-normal text-gray-600">{item.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BioDataInformation;
