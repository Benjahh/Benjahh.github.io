import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { whileHoverStyle } from "@/lib/data";

export const GithubCard = () => {
  return (
    <motion.a
      href="https://github.com/Benjahh"
      whileHover={whileHoverStyle}
      whileTap={whileHoverStyle}
      transition={{ duration: 0.2 }}
      className="card__border overflow-hidden bg-firstAccent hover:cursor-pointer   "
    >
      <header className="absolute bottom-0 left-0  p-4 sm:p-6 lg:p-8 gap-1 flex flex-col">
        <h1 className="card__title">My Github Profile</h1>
        <p className="card__description">
          ¡Source code for all my projects available there!
        </p>
      </header>

      <FiExternalLink className="top-0 right-0 card__link" />
      <FaGithub className="absolute top-0 lg:h-[40px] lg:w-[40px] w-[30px] h-[30px]  left-0  m-4 sm:m-6 lg:m-8" />
    </motion.a>
  );
};
