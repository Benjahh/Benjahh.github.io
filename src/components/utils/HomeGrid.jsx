import { motion } from "framer-motion";
import { cardComponents } from "@/lib/data";

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
    x: "190%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
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
      auto-rows-[60px] sm:auto-rows-[40px] md:auto-rows-[60px] lg:auto-rows-[80px] gap-4"
    >
      {cardComponents.map(({ componentStyle, Component, id }) => (
        <motion.section
          variants={childrenVariant}
          key={id}
          className={componentStyle}
          onClick={() => {
            if (id == 8) {
              handleViewProjects(false);
              handleProjectId(null);
            }
          }}
        >
          {Component}
        </motion.section>
      ))}
    </motion.section>
  );
};
