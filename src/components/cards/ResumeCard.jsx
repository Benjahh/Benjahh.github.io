import { FaFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { whileHoverStyle } from "@/lib/data";

export const ResumeCard = () => {
  return (
    <motion.div
      whileHover={whileHoverStyle}
      transition={{ duration: 0.3 }}
      className="card__border  bg-firstAccent gap-8 hover:cursor-pointer"
    >
      <FiDownload className="card__link top-0 right-0" size={20} />
      <FaFilePdf className="card__svg" />
      <h1 className="card__svgText">My Resume</h1>
    </motion.div>
  );
};
