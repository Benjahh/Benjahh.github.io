import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const GithubCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        backgroundColor: 'rgba(39, 39, 42, 0.5)',
        color: '#EBEB5E',
      }}
      transition={{ duration: 0.3 }}
      className="test-border overflow-hidden bg-firstAccent hover:cursor-pointer flex-col  "
    >
      <header className="absolute bottom-0 left-0 p-10 gap-1 flex flex-col">
        <h1 className=" tracking-wide font-bebasNeue  lg:text-5xl brightness-125">
          My Github Profile
        </h1>
        <p className="brightness-125 text-thirdAccent font-semibold  font-montserrat lg:text-3xl  ">
          ¡Source code for all my projects available there!
        </p>
      </header>
      <FiExternalLink
        className="text-white absolute top-0 right-0  m-10"
        size={20}
      />
      <FaGithub size={50} className="absolute top-0 left-0 m-10" />
    </motion.div>
  );
};
