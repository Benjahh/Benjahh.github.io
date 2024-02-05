import { FiExternalLink } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

export const MailCard = () => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.02,
        backgroundColor: "rgba(39, 39, 42, 0.5)",
        color: "#EBEB5E",
      }}
      className="card__border bg-firstAccent"
    >
      <h1 className="card__svgText ">Let's get in touch</h1>
      <IoIosMail className="card__svg" />
      <FiExternalLink className="card__link top-0 right-0" size={20} />
    </motion.div>
  );
};
