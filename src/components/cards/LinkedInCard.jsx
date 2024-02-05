import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { whileHoverStyle } from "@/lib/data";

export const LinkedInCard = () => {
  return (
    <motion.div
      whileHover={whileHoverStyle}
      transition={{ duration: 0.3 }}
      className="hover:cursor-pointer card__border bg-firstAccent"
    >
      <FiExternalLink className="card__link top-0 right-0" size={20} />
      <FaLinkedinIn className="card__svg" />
    </motion.div>
  );
};
