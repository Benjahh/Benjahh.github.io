import { motion } from 'framer-motion';
import { Hero } from './hero';
import { SiLinkedin } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
import { TechStack } from './TechStack';
import { techStack } from '@/lib/data';

export const HomeGrid = ({ handleViewProjects }) => {
  return (
    <motion.div className=" w-full grid grid-cols-6 grid-rows-12  gap-4">
      <header className="test-border bg-fourthAccent bg-opacity-50 col-span-4 relative  flex flex-col row-span-6">
        <Hero />
        <motion.p className="absolute bottom-0 left-0 m-10 font-semibold font-montserrat max-w-lg text-thirdAccent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          animi rem accusantium porro maiores cum laborum natus hic doloribus
          aut iste unde explicabo dolorum, reprehenderit dolor. Unde adipisci
          nesciunt cum!
        </motion.p>
      </header>

      <motion.a
        whileHover={{ scale: 1.03, borderColor: 'white' }}
        className="test-border  hover:cursor-pointer bg-opacity-50 bg-[#0e76a8]  justify-center  col-span-1 row-span-2 flex items-center "
      >
        <SiLinkedin size={80} />
      </motion.a>

      <div className="test-border font-montserrat bg-red-500 bg-opacity-50 font-semibold text-md col-span-1 row-span-2 flex flex-col  ">
        <h2>My Age</h2>
        <h1 className="text-4xl font-bebasNeue">20</h1>
        <h2>Year's old.</h2>
      </div>

      <div className="test-border bg-opacity-50 relative bg-green-500 gap-2 flex-col col-span-2 row-span-4 flex items-center justify-center">
        <h1 className="font-bebasNeue font-semibold text-7xl  text-thirdAccent absolute ">
          Tech Stack
        </h1>
        <div className="grid-cols-2 z-10  items-center justify-center grid-rows-3 w-full grid gap-4 font-montserrat font-semibold">
          {techStack.map(({ techName, TechIcon, id }) => (
            <TechStack key={id} techName={techName} TechIcon={TechIcon} />
          ))}
        </div>
      </div>

      <div className="test-border bg-opacity-35 bg-purple-500 row-span-3 col-span-2">
        WEATHER
      </div>

      <motion.a
        whileHover={{ scale: 1.03, borderColor: 'white' }}
        className="test-border font-montserrat hover:cursor-pointer flex-col relative bg-opacity-50 bg-firstAccent justify-center col-span-3 row-span-3 flex items-center "
      >
        <h1>Checkout my Github.</h1>
        <p>¡Source code for my projects availalbe!</p>
        <FiGithub size={40} className="absolute top-0 right-0 m-8" />
      </motion.a>

      <motion.div className="test-border bg-opacity-35 bg-yellow-500 row-span-3 text-4xl">
        EN-ES?
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03, borderColor: 'white' }}
        className=" text-4xl test-border relative overflow-hidden col-span-4 hover:cursor-pointer hover:brightness-75  row-span-3 "
        onClick={handleViewProjects}
      >
        <div className="opacity-35 bg-coding absolute bg-no-repeat h-full  w-full">
          {' '}
        </div>
        <div className="opacity-100">Projects</div>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.03, borderColor: 'white' }}
        className="test-border bg-opacity-35  bg-teal-500 col-span-2 row-span-3"
      >
        <CiMail size={80} />
      </motion.button>
    </motion.div>
  );
};
