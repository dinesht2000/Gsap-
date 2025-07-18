import React from "react";
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaDiscord /> },
  { icon: <FaTwitter /> },
  { icon: <FaGithub /> },
  { icon: <FaTwitch /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-500 py-4 text-black ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; BaseCoder 2025. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {socials.map((link) => (
            <a
              href="#"
              key={link}
              target="_blank"
              rel="noopener noreferrer"
              className="tetx-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
