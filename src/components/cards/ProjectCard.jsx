import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { whileHoverStyle } from "@/lib/data";

export const ProjectCard = () => {
  return (
    <motion.div
      whileHover={whileHoverStyle}
      whileTap={whileHoverStyle}
      transition={{ duration: 0.2 }}
      className="card__border bg-firstAccent overflow-hidden hover:cursor-pointer "
    >
      <header className="absolute top-0 left-0  p-4 sm:p-6 lg:p-8 gap-1 flex flex-col">
        <h1 className="card__title">Projects</h1>
        <p className="card__description">
          Web applications i've made honing my skills.
        </p>
      </header>
      <FaAngleDoubleDown className="card__link bottom-0 " />
    </motion.div>
  );
};
