import { motion } from 'framer-motion';
import { Hero } from './hero';
import { FiExternalLink } from 'react-icons/fi';
import { IoIosMail } from 'react-icons/io';
import { TechStack } from './TechStack';
import { techStack } from '@/lib/data';
import {
  FaGithub,
  FaLinkedinIn,
  FaFileDownload,
  FaAngleDoubleDown,
} from 'react-icons/fa';
import { Children } from 'react';

const variant = {
  hidden: {
    opacity: 0,
    y: '50%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const HomeGrid = ({ handleViewProjects }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ duration: 1 }}
      className=" w-full grid grid-cols-8
     auto-rows-[100px] gap-4"
    >
      <motion.div
        variants={variant}
        className="test-border relative bg-secondAccent bg-opacity-50 col-span-6  row-span-6"
      >
        <div className=" absolute left-0 m-10 flex flex-col  max-w-4xl gap-8 bottom-0">
          <Hero />
          <motion.p className=" bottom-0 left-0 text-2xl font-semibold  font-montserrat  text-thirdAccent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            animi rem accusantium porro maiores cum laborum natus hic doloribus
            aut iste unde explicabo dolorum, reprehenderit dolor. Unde adipisci
            nesciunt cum!
          </motion.p>
        </div>
      </motion.div>

      <motion.a
        whileHover={{ scale: 1.03, filter: 'brightness(110%)' }}
        transition={{ duration: 0.3 }}
        variants={variant}
        className="test-border relative  hover:cursor-pointer bg-opacity-50 bg-[#0e76a8]  justify-center  col-span-2 row-span-3 flex items-center "
      >
        <FiExternalLink className="absolute top-0 right-0  m-10" size={20} />
        <FaLinkedinIn size={120} />
      </motion.a>

      <motion.a
        variants={variant}
        whileHover={{ scale: 1.02, filter: 'brightness(110%)' }}
        transition={{ duration: 0.3 }}
        className="test-border font-montserrat text-center gap-8 text-xl hover:cursor-pointer bg-amber-400 bg-opacity-50 font-bold text-md col-span-2 row-span-3 flex flex-col  "
      >
        <h1>¿Want to know more about me?</h1>
        <FaFileDownload size={120} />
        <h1>Download my Resume</h1>
      </motion.a>

      <motion.div
        variants={variant}
        className="test-border bg-opacity-50 relative bg-green-500 gap-2 flex-col col-span-2 row-span-3 flex items-center justify-center"
      >
        <h1 className="font-bebasNeue font-semibold text-7xl  text-thirdAccent absolute ">
          Tech Stack
        </h1>
        <div className="grid-cols-3 z-10  gap-2 items-center justify-items-center  grid-rows-3 w-full grid  font-montserrat font-semibold">
          {techStack.map(({ techName, TechIcon, id }) => (
            <TechStack key={id} techName={techName} TechIcon={TechIcon} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={variant}
        className="test-border bg-opacity-50 bg-purple-500 row-span-3 col-span-2"
      >
        WEATHER
      </motion.div>

      <motion.a
        variants={variant}
        whileHover={{ scale: 1.03, filter: 'brightness(110%)' }}
        transition={{ duration: 0.3 }}
        className="test-border  overflow-hidden bg-opacity-50   object-cover hover:cursor-pointer flex-col relative  bg-firstAccent justify-center col-span-4 row-span-3 flex items-center "
      >
        <div className="bg-github opacity-60 bg-contain  absolute  bg-no-repeat h-full w-full" />
        <header className="absolute bottom-0 left-0 p-10 gap-1 flex flex-col">
          <h1 className="text-white tracking-wide font-bebasNeue  text-4xl brightness-125">
            My Github Profile
          </h1>
          <p className="brightness-125 text-thirdAccent font-semibold  font-montserrat text-2xl  ">
            ¡Source code for all my projects available there!
          </p>
        </header>
        <FiExternalLink className="absolute top-0 right-0  m-10" size={20} />
        <FaGithub size={40} className="absolute top-0 left-0 m-10" />
      </motion.a>

      <motion.div
        variants={variant}
        className="test-border bg-opacity-50 col-span-2 bg-red-500 row-span-3 text-4xl"
      >
        EN-ES?
      </motion.div>

      <motion.a
        variants={variant}
        whileHover={{ scale: 1.02, filter: 'brightness(110%)' }}
        transition={{ duration: 0.3 }}
        className=" text-4xl test-border bg-opacity-50  relative overflow-hidden  col-span-4 hover:cursor-pointer row-span-3 "
        onClick={handleViewProjects}
      >
        <div className=" bg-coding opacity-60  absolute bg-no-repeat h-full  w-full"></div>
        <header className="absolute top-0 left-0 p-10 gap-1 flex flex-col">
          <h1 className=" brightness-125 tracking-wide text-4xl font-bebasNeue   ">
            Projects
          </h1>
          <p className="brightness-125 text-thirdAccent font-semibold  font-montserrat text-2xl">
            Web applications i've made honing my skills.
          </p>
        </header>
        <FaAngleDoubleDown size={20} className="absolute bottom-0 m-10" />
      </motion.a>

      <motion.button
        variants={variant}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03, filter: 'brightness(110%)' }}
        className="test-border bg-opacity-50 relative flex flex-col text-xl bg-blue-500 col-span-2 row-span-3"
      >
        <h1>Lets get in touch.</h1>
        <IoIosMail size={120} />
        <FiExternalLink className="absolute top-0 right-0  m-10" size={20} />
      </motion.button>
    </motion.section>
  );
};
