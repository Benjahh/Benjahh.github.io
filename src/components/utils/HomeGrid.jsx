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
      staggerChildren: 0.2,
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

export const HomeGrid = ({ handleViewProjects, handleProjectId }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ duration: 1 }}
      className=" w-full h-full grid grid-cols-8  overflow-visible
     auto-rows-[100px] gap-4"
    >
      <motion.article
        variants={childrenVariant}
        className="col-span-6  row-span-6"
      >
        <HeroCard />
      </motion.article>

      <motion.article
        className="col-span-2 row-span-3"
        variants={childrenVariant}
      >
        <LinkedInCard />
      </motion.article>

      <motion.article
        variants={childrenVariant}
        className="col-span-2 row-span-3"
      >
        <ResumeCard />
      </motion.article>

      <motion.article
        variants={childrenVariant}
        className="col-span-2 row-span-3"
      >
        <TechStackCard />
      </motion.article>

      <motion.article
        variants={childrenVariant}
        className=" row-span-3 col-span-2"
      >
        <WeatherCard />
      </motion.article>

      <motion.article
        variants={childrenVariant}
        className="col-span-4 row-span-3"
      >
        <GithubCard />
      </motion.article>

      <motion.article
        variants={childrenVariant}
        className="col-span-2 row-span-3"
      >
        <LanguageCard />
      </motion.article>

      <motion.article
        variants={childrenVariant}
        className="col-span-4 row-span-3"
        onClick={() => {
          handleViewProjects(false);
          handleProjectId(null);
        }}
      >
        <ProjectCard />
      </motion.article>

      <motion.article
        variants={childrenVariant}
        className="col-span-2 row-span-3"
      >
        <MailCard />
      </motion.article>
    </motion.section>
  );
};
