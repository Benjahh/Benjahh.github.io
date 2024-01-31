import { FiExternalLink } from 'react-icons/fi';
import { IoIosMail } from 'react-icons/io';
import { motion } from 'framer-motion';

export const MailCard = () => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.02,
        backgroundColor: 'rgba(39, 39, 42, 0.5)',
        color: '#EBEB5E',
      }}
      className="test-border bg-firstAccent font-montserrat font-bold flex-col text-2xl "
    >
      <h1 className="text-white ">Lets get in touch.</h1>
      <IoIosMail size={120} />
      <FiExternalLink
        className="text-white  absolute top-0 right-0  m-10"
        size={20}
      />
    </motion.div>
  );
};
