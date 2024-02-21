import { IndividualProjectCard } from '@/components/cards/IndividualProjectCard';
import { projects } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';

export const ProjectGrid = ({
  handleViewProjects,
  handleProjectId,
  viewProjects,
  viewIndividualProject,
}) => {
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
    exit: {
      opacity: 0,
    },
  };

  const childrenVariant = {
    hidden: {
      opacity: 0,
      y: '190%',
      transition: {
        ease: 'easeIn',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: '200%',
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="relative  md:max-w-[700px] xl:max-w-[1000px] w-full   flex  self-center "
    >
      <AnimatePresence>
        {viewProjects && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={childrenVariant}
            className="grid-cols-6 gap-4 grid xl:auto-rows-[110px] lg:auto-rows-[80px] sm:auto-rows-[70px] md:auto-rows-[70px]  auto-rows-[40px] lg:h-[690px] w-full  relative"
          >
            <AnimatePresence>
              {projects.map(({ projectId, projectIcon }) => (
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(39, 39, 42, 0.5)',
                    color: '#EBEB5E',
                  }}
                  key={projectId}
                  exit={{ opacity: 0 }}
                  variants={childrenVariant}
                  className={`
           card__border h-full bg-secondAccent hover:cursor-pointer
             ${projectId == 1 && 'row-span-2 col-span-4'}
             ${projectId == 2 && 'row-span-4 col-span-2'}
             ${projectId == 3 && 'row-span-2 col-span-2'}
             ${projectId == 4 && 'row-span-4 col-span-2'}
             ${projectId == 5 && 'row-span-2 col-span-2'}
             ${projectId == 6 && 'row-span-2 col-span-2 '}
             `}
                  onClick={() => {
                    handleViewProjects(false);
                    handleProjectId(projectId);
                  }}
                >
                  {projectIcon}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {viewIndividualProject && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={childrenVariant}
            className="h-[690px] w-full "
          >
            <IndividualProjectCard
              handleViewProjects={handleViewProjects}
              handleProjectId={handleProjectId}
              id={viewIndividualProject}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
