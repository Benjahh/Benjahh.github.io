import { FaAngleDoubleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const ProjectCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        backgroundColor: 'rgba(39, 39, 42, 0.5)',
        color: '#EBEB5E',
      }}
      transition={{ duration: 0.3 }}
      className=" text-4xl test-border bg-firstAccent overflow-hidden  hover:cursor-pointer "
    >
      <header className="absolute top-0 left-0 p-10 gap-1 flex flex-col">
        <h1 className=" brightness-125 tracking-wide lg:text-5xl font-bebasNeue   ">
          Projects
        </h1>
        <p className="brightness-125 text-thirdAccent font-semibold  font-montserrat lg:text-3xl">
          Web applications i've made honing my skills.
        </p>
      </header>
      <FaAngleDoubleDown size={20} className="absolute bottom-0 m-10" />
    </motion.div>
  );
};
