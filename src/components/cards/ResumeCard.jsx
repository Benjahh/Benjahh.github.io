import { FaFilePdf } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const ResumeCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        backgroundColor: 'rgba(39, 39, 42, 0.5)',
        color: '#EBEB5E',
      }}
      transition={{ duration: 0.3 }}
      className="test-border font-montserrat bg-firstAccent text-center gap-8 text-2xl hover:cursor-pointer  font-bold text-md  flex-col  "
    >
      <FiDownload
        className="text-white  absolute top-0 right-0  m-10"
        size={20}
      />
      <FaFilePdf size={120} />
      <h1 className="text-white ">My Resume</h1>
    </motion.div>
  );
};
