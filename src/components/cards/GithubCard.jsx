import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { whileHoverStyle } from "@/lib/data";

export const GithubCard = () => {
  return (
    <motion.div
      whileHover={whileHoverStyle}
      transition={{ duration: 0.3 }}
      className="card__border overflow-hidden bg-firstAccent hover:cursor-pointer   "
    >
      <header className="absolute bottom-0 left-0 p-8 gap-1 flex flex-col">
        <h1 className="card__title">My Github Profile</h1>
        <p className="card__description">
          ¡Source code for all my projects available there!
        </p>
      </header>

      <FiExternalLink className="top-0 right-0 card__link" size={20} />
      <FaGithub className="absolute top-0 lg:h-[40px] lg:w-[40px]  left-0 m-8" />
    </motion.div>
  );
};
