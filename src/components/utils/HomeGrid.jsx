import { motion } from 'framer-motion';
import {
  GithubCard,
  HeroCard,
  LanguageCard,
  LinkedInCard,
  ProjectCard,
  ResumeCard,
  TechStackCard,
  WeatherCard,
} from '../cards';
import { FiExternalLink } from 'react-icons/fi';
import { IoIosMail } from 'react-icons/io';
import { MailCard } from '../cards/MailCard';

const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childrenVariant = {
  hidden: {
    opacity: 0,
    x: '190%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
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
      className=" w-full h-full grid grid-cols-8  overflow-visible
     auto-rows-[150px] gap-4"
    >
      <motion.div
        variants={childrenVariant}
        className="test-border relative bg-secondAccent  col-span-6  row-span-6"
      >
        <HeroCard />
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.02,
          backgroundColor: 'rgba(161, 161, 170, 0.5)',
        }}
        transition={{ duration: 0.3 }}
        variants={childrenVariant}
        className="test-border relative  hover:cursor-pointer  bg-[#0e76a8]  justify-center  col-span-2 row-span-3 flex items-center "
      >
        <LinkedInCard />
      </motion.div>

      <motion.a
        variants={childrenVariant}
        whileHover={{
          scale: 1.02,
          backgroundColor: 'rgba(161, 161, 170, 0.5)',
        }}
        transition={{ duration: 0.3 }}
        className="test-border font-montserrat text-center gap-8 text-xl hover:cursor-pointer bg-amber-400 font-bold text-md col-span-2 row-span-3 flex flex-col  "
      >
        <ResumeCard />
      </motion.a>

      <motion.div
        variants={childrenVariant}
        className="test-border relative bg-green-500 gap-2 flex-col col-span-2 row-span-3 flex items-center justify-center"
      >
        <TechStackCard />
      </motion.div>

      <motion.div
        variants={childrenVariant}
        className="test-border relative bg-purple-500 row-span-3 col-span-2"
      >
        <WeatherCard />
      </motion.div>

      <motion.a
        variants={childrenVariant}
        whileHover={{
          scale: 1.02,
          backgroundColor: 'rgba(161, 161, 170, 0.5)',
        }}
        transition={{ duration: 0.3 }}
        className="test-border  overflow-hidden    object-cover hover:cursor-pointer flex-col relative  bg-firstAccent justify-center col-span-4 row-span-3 flex items-center "
      >
        <GithubCard />
      </motion.a>

      <motion.div
        variants={childrenVariant}
        className="test-border  col-span-2 bg-red-500 row-span-3 text-4xl"
      >
        <LanguageCard />
      </motion.div>

      <motion.a
        variants={childrenVariant}
        whileHover={{
          scale: 1.02,
          backgroundColor: 'rgba(161, 161, 170, 0.5)',
        }}
        transition={{ duration: 0.3 }}
        className=" text-4xl test-border   relative overflow-hidden  col-span-4 hover:cursor-pointer row-span-3 "
        onClick={handleViewProjects}
      >
        <ProjectCard />
      </motion.a>

      <motion.button
        variants={childrenVariant}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03, filter: 'brightness(110%)' }}
        className="test-border  relative flex flex-col text-xl bg-blue-500 col-span-2 row-span-3"
      >
        <MailCard />
      </motion.button>
    </motion.section>
  );
};
