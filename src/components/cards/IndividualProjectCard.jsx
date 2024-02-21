import { projects } from '@/lib/data';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const IndividualProjectCard = ({
  id,
  handleProjectId,
  handleViewProjects,
}) => {
  const project = projects.find((project) => project.projectId == id);
  const {
    projectLink,
    projectRepo,
    projectCreation,
    projectDescription,
    projectName,
    projectType,
  } = project;

  console.log(id);

  return (
    <article
      className="justify-center relative flex-col bg-opacity-40 items-center
    flex rounded-2xl p-4 sm:p-6 lg:p-8 bg-secondAccent"
    >
      <section className="h-full justify-between">
        <div className=" gap-1 md:gap-2 flex flex-col ">
          <h1 className="card__title">{projectType}</h1>
          <header className="card__title">{projectName}</header>
          <p className="card__description">{projectDescription}</p>
        </div>
        <div className="bg-white h-[1px] my-4 lg:my-6" />
        <div className="flex flex-row  gap-2  lg:gap-4 w-full items-end justify-end">
          <motion.a
            whileHover={{
              backgroundColor: 'rgb(161 161 170)',
            }}
            transition={{ duration: 0.3 }}
            href={projectLink}
            className="project__button text-black bg-white"
          >
            <FaGithub size={20} />
            <span>Source Code</span>
          </motion.a>
          <motion.a
            whileHover={{
              backgroundColor: 'rgb(235 235 94)',
              color: 'rgb(0 0 0)',
            }}
            transition={{ duration: 0.3 }}
            href={projectRepo}
            className="project__button border text-white border-firstAccent"
          >
            <FiExternalLink size={20} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </section>
      <motion.button
        whileHover={{
          scale: 1.05,
          color: '#ffffff',
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 right-0 m-4 sm:m-6 lg:m-8 text-firstAccent hover:cursor-pointer "
        onClick={() => {
          handleProjectId(null);
          handleViewProjects(true);
        }}
      >
        <FaRegWindowClose className="lg:w-[30px] lg:h-[30px] sm:w-[35px] sm:h-[35px] md:w-[30px] h-[25px] w-[25px]  " />
      </motion.button>
    </article>
  );
};
