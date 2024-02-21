import { FaFilePdf } from 'react-icons/fa';
import { PiFilePdfLight } from 'react-icons/pi';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { whileHoverStyle } from '@/lib/data';

export const ResumeCard = () => {
  return (
    <motion.div
      whileHover={whileHoverStyle}
      whileTap={whileHoverStyle}
      transition={{ duration: 0.2 }}
      className="card__border gap-2  bg-firstAccent hover:cursor-pointer"
    >
      <FiDownload className="card__link top-0 right-0" size={20} />
      <PiFilePdfLight className="card__svg" />
      <h1 className="card__svgText">My Resume</h1>
    </motion.div>
  );
};
