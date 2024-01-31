import { FiExternalLink } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
export const LinkedInCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        backgroundColor: 'rgba(39, 39, 42, 0.5)',
        color: '#EBEB5E',
      }}
      transition={{ duration: 0.3 }}
      className="hover:cursor-pointer test-border bg-firstAccent   "
    >
      <FiExternalLink
        className="absolute top-0 text-white right-0 m-10"
        size={20}
      />
      <FaLinkedinIn className="" size={120} />
    </motion.div>
  );
};
