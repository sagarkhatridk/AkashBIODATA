import React from "react";
import { motion } from "motion/react";

const BioDataInformation = () => {
  const sections = [
    {
      title: "Personal Information",
      data: [
        { label: "Name", value: "Khatri Akash Ileshkumar" },
        { label: "Date of Birth", value: "28th February 2001" },
        { label: "Height", value: "5'6\"" },
        { label: "Weight", value: "60 kg" },
      ],
    },
    {
      title: "Family Details",
      data: [
        { label: "Mother", value: "Dakshaben Ileshkumar Khatri (Housewife)" },
        { label: "Father", value: "Ileshkumar Vinodchandra Khatri (RIP)" },
        {
          label: "Elder Sister",
          value: "Riya Chiragkumar Suthar (Married)",
        },
      ],
    },
    {
      title: "Career",
      data: [
        { label: "Education", value: "Diploma in Embroidery Design" },
        { label: "Profession", value: "Embroidery Designer (Sketcher)" },
      ],
    },
    {
      title: "Hobbies & Interests",
      data: [{ label: "Hobbies", value: "Designing, Sketching, Travelling" }],
    },
  ];

  return (
    <section className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-center font-bold mb-8 text-2xl sm:text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Bio Data Information
      </motion.h2>

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {section.title}
            </h3>

            {/* Section Items */}
            <div className="space-y-3">
              {section.data.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                >
                  <span className="font-semibold text-gray-700">
                    {item.label}:
                  </span>{" "}
                  <span className="text-gray-600">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BioDataInformation;
