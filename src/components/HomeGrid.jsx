import { motion } from 'framer-motion';
import { Hero } from './hero';
import { FiGithub } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
import { TechStack } from './TechStack';
import { techStack } from '@/lib/data';
import { FaLinkedinIn } from 'react-icons/fa';

export const HomeGrid = ({ handleViewProjects }) => {
  return (
    <motion.div
      className=" w-full  grid grid-cols-8
     auto-rows-[100px] gap-4"
    >
      <header className="test-border bg-secondAccent bg-opacity-50 col-span-6 relative  flex flex-col row-span-6">
        <Hero />
        <motion.p className="absolute bottom-0 left-0 m-10 text-2xl font-semibold font-montserrat max-w-2xl text-thirdAccent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          animi rem accusantium porro maiores cum laborum natus hic doloribus
          aut iste unde explicabo dolorum, reprehenderit dolor. Unde adipisci
          nesciunt cum!
        </motion.p>
      </header>
      <motion.a
        whileHover={{ scale: 1.03, filter: 'brightness(110%)' }}
        transition={{ duration: 0.3 }}
        className="test-border  hover:cursor-pointer bg-opacity-50 bg-[#0e76a8]  justify-center  col-span-2 row-span-3 flex items-center "
      >
        <FaLinkedinIn size={120} />
      </motion.a>
      <div className="test-border font-montserrat bg-amber-400 bg-opacity-50 font-semibold text-md col-span-2 row-span-3 flex flex-col  ">
        Resume
      </div>
      <div className="test-border bg-opacity-50 relative bg-green-500 gap-2 flex-col col-span-2 row-span-3 flex items-center justify-center">
        <h1 className="font-bebasNeue font-semibold text-7xl  text-thirdAccent absolute ">
          Tech Stack
        </h1>
        <div className="grid-cols-3 z-10  p-8 gap-8 items-center justify-items-center  grid-rows-3 w-full grid  font-montserrat font-semibold">
          {techStack.map(({ techName, TechIcon, id }) => (
            <TechStack key={id} techName={techName} TechIcon={TechIcon} />
          ))}
        </div>
      </div>
      <div className="test-border bg-opacity-35 bg-purple-500 row-span-3 col-span-2">
        WEATHER
      </div>
      <motion.a
        whileHover={{ scale: 1.03, filter: 'brightness(110%)' }}
        transition={{ duration: 0.3 }}
        className="test-border  overflow-hidden bg-opacity-50   object-cover hover:cursor-pointer flex-col relative  bg-firstAccent justify-center col-span-4 row-span-3 flex items-center "
      >
        <div className="bg-github opacity-50 bg-contain  absolute  bg-no-repeat h-full w-full" />
        <h1 className="text-white font-bebasNeue  text-4xl absolute top-0 left-0 m-10 brightness-125">
          My Github Profile
        </h1>
        <p className="brightness-125 text-thirdAccent font-semibold  font-montserrat text-xl absolute  bottom-0 m-10 ">
          ¡Source code for all my projects available there!
        </p>
        <FiGithub size={40} className="absolute top-0 right-0 m-8" />
      </motion.a>
      <motion.div className="test-border bg-opacity-35 col-span-2 bg-orange-400 row-span-3 text-4xl">
        EN-ES?
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02, filter: 'brightness(110%)' }}
        transition={{ duration: 0.3 }}
        className=" text-4xl test-border bg-opacity-50  relative overflow-hidden  col-span-4 hover:cursor-pointer row-span-3 "
        onClick={handleViewProjects}
      >
        <div className=" bg-coding opacity-50  absolute bg-no-repeat h-full  w-full"></div>
        <div className="opacity-100">Projects</div>
      </motion.div>
      <motion.button
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03, filter: 'brightness(110%)' }}
        className="test-border bg-opacity-35 bg-blue-500 col-span-2 row-span-3"
      >
        <CiMail size={80} />
      </motion.button>
    </motion.div>
  );
};
