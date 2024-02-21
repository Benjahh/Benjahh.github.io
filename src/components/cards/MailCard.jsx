import { FiExternalLink } from 'react-icons/fi';
import { IoIosMail } from 'react-icons/io';
import { motion } from 'framer-motion';
import { whileHoverStyle } from '@/lib/data';

export const MailCard = () => {
  return (
    <motion.div
      whileHover={whileHoverStyle}
      whileTap={whileHoverStyle}
      transition={{ duration: 0.2 }}
      className="card__border  bg-firstAccent  hover:cursor-pointer"
    >
      <FiExternalLink className="card__link top-0 right-0" />
      <IoIosMail className="card__svg " />
      <h1 className="card__svgText ">Let's get in touch</h1>
    </motion.div>
  );
};
