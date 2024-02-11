import { testArray } from "@/components/utils/ProjectGrid";
import { FaRegWindowClose } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export const IndividualProjectCard = ({
  id,
  handleProjectId,
  handleViewProjects,
}) => {
  const toView = testArray.find((project) => project.id == id);

  return (
    <article
      className=" w-full h-full
      flex-col  
     flex rounded-2xl  "
    >
      <figure className="bg-thirdAccent bg-opacity-40 rounded-t-xl  "></figure>
      <section className=" bg-secondAccent card__border">
        <div className=" gap-1 md:gap-2 flex flex-col">
          <h1 className="card__title">Full-Stack App</h1>
          <header className="card__title">Ai Image Generation App</header>
          <p className="card__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            saepe reprehenderit laudantium qui odio quisquam dolores adipisci
            error optio deserunt vel dolor, expedita dolore voluptatibus
            aspernatur velit voluptas! A, reiciendis.
          </p>
        </div>
        <div className="bg-white h-[1px] my-2 lg:my-6" />
        <div className="flex flex-row absolute bottom-0 right-0 gap-2 lg:gap-4 m-4 lg:m-8">
          <motion.a
            whileHover={{
              backgroundColor: "rgb(161 161 170)",
            }}
            transition={{ duration: 0.3 }}
            href=""
            className="project__button text-black bg-white"
          >
            <FaGithub size={20} />
            <span>Source Code</span>
          </motion.a>
          <motion.a
            whileHover={{
              backgroundColor: "rgb(161 161 170)",
              color: "rgb(0 0 0)",
            }}
            transition={{ duration: 0.3 }}
            href=""
            className="project__button border text-white border-thirdAccent"
          >
            <FiExternalLink size={20} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </section>

      <motion.button
        whileHover={{
          scale: 1.05,
          color: "#ffffff",
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 right-0 m-6 text-firstAccent hover:cursor-pointer "
        onClick={() => {
          handleProjectId(null);
          handleViewProjects(true);
        }}
      >
        <FaRegWindowClose size={30} />
      </motion.button>
    </article>
  );
};
