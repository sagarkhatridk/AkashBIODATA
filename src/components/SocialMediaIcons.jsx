import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import data from '../Utils/info.json';

const socialMediaLinks = [
  { icon: <FaGithub />, url: data.social_links.github },
  { icon: <FaTwitter />, url: data.social_links.twitter },
  { icon: <FaEnvelope />, url: 'mailto:jay1704mandaviya@gmail.com' },
  { icon: <FaLinkedinIn />, url: data.social_links.linkedin },
];

const SocialMediaIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="flex space-x-4 bg-gray-200/30 backdrop-blur-sm rounded-md px-3"
    >
      {socialMediaLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 text-xl transition-colors duration-200"
        >
          <div className="w-10 h-10 flex items-center justify-center  rounded-full transition duration-300">
            {social.icon}
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default SocialMediaIcons;
