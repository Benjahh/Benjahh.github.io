import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion";

export const ProjectCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        backgroundColor: "rgba(39, 39, 42, 0.5)",
        color: "#EBEB5E",
      }}
      transition={{ duration: 0.3 }}
      className="card__border bg-firstAccent overflow-hidden hover:cursor-pointer "
    >
      <header className="absolute top-0 left-0 p-10 gap-1 flex flex-col">
        <h1 className="card__title">Projects</h1>
        <p className="card__description">
          Web applications i've made honing my skills.
        </p>
      </header>
      <FaAngleDoubleDown size={20} className="card__link bottom-0 " />
    </motion.div>
  );
};
