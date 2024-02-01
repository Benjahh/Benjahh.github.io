import { IndividualProjectCard } from '@/components/cards/IndividualProjectCard';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const testArray = [
  { name: 'nn1', id: 1 },
  { name: 'nn2', id: 2 },
  { name: 'nn3', id: 3 },
  { name: 'nn4', id: 4 },
  { name: 'nn5', id: 5 },
  { name: 'nn6', id: 6 },
];
export const ProjectGrid = () => {
  const [viewIndividualProject, setViewIndividualProject] = useState(null);

  const handleProjectId = (id) => {
    setViewIndividualProject(id);
  };
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
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variant}
        className="grid-cols-6 gap-4 grid auto-rows-[80px] relative"
      >
        <AnimatePresence>
          {testArray.map(({ name, id }) => (
            <motion.div
              initial="hidden"
              key={id}
              animate="visible"
              exit={{ duration: 2, opacity: 0 }}
              variants={childrenVariant}
              className={`
           test-border bg-thirdAccent
             ${id == 1 && 'row-span-2 col-span-4'}
             ${id == 2 && 'row-span-4 col-span-2'}
             ${id == 3 && 'row-span-2 col-span-2'}
             ${id == 4 && 'row-span-4 col-span-2'}
             ${id == 5 && 'row-span-2 col-span-2'}
             ${id == 6 && 'row-span-2 col-span-2 '}
             `}
              onClick={() => handleProjectId(id)}
            >
              {name}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {viewIndividualProject && (
        <IndividualProjectCard
          handleProjectId={handleProjectId}
          id={viewIndividualProject}
        />
      )}
    </>
  );
};
