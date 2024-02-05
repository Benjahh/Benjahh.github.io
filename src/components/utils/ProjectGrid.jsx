import { IndividualProjectCard } from "@/components/cards/IndividualProjectCard";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const testArray = [
  { name: "nn1", id: 1 },
  { name: "nn2", id: 2 },
  { name: "nn3", id: 3 },
  { name: "nn4", id: 4 },
  { name: "nn5", id: 5 },
  { name: "nn6", id: 6 },
];
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
      y: "190%",
      transition: {
        ease: "easeIn",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: "200%",
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="relative  md:max-w-[700px] w-full   flex  self-center "
    >
      <AnimatePresence>
        {viewProjects && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={childrenVariant}
            className="grid-cols-6 gap-4 grid lg:auto-rows-[100px] auto-rows-[40px] lg:h-[690px] w-full  relative"
          >
            <AnimatePresence>
              {testArray.map(({ name, id }) => (
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(39, 39, 42, 0.5)",
                    color: "#EBEB5E",
                  }}
                  key={id}
                  exit={{ opacity: 0 }}
                  variants={childrenVariant}
                  className={`
           card__border h-full bg-secondAccent hover:cursor-pointer
             ${id == 1 && "row-span-2 col-span-4"}
             ${id == 2 && "row-span-4 col-span-2"}
             ${id == 3 && "row-span-2 col-span-2"}
             ${id == 4 && "row-span-4 col-span-2"}
             ${id == 5 && "row-span-2 col-span-2"}
             ${id == 6 && "row-span-2 col-span-2 "}
             `}
                  onClick={() => {
                    handleViewProjects(false);
                    handleProjectId(id);
                  }}
                >
                  {name}
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
