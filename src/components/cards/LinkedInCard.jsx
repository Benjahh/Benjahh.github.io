import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { whileHoverStyle } from "@/lib/data";

export const LinkedInCard = () => {
  return (
    <motion.a
      href="https://www.linkedin.com/in/lucas-ag%C3%BCero/"
      whileHover={whileHoverStyle}
      whileTap={whileHoverStyle}
      transition={{ duration: 0.2 }}
      className="hover:cursor-pointer card__border bg-firstAccent"
    >
      <FiExternalLink className="card__link top-0 right-0" />
      <FaLinkedinIn className="card__svg" />
    </motion.a>
  );
};
