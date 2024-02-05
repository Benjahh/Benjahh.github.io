import { motion } from "framer-motion";
import { heroText } from "@/lib/data";

export const HeroCard = () => {
  const words = heroText.map(({ text }) => [...text, "\u00A0"]);
  console.log(words);
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const childrenVariant = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.8 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.8 },
    },
  };

  return (
    <motion.header className="card__border gap-6 bg-secondAccent ">
      <div className="flex flex-col h-full w-full  justify-end gap-4  ">
        <motion.h1
          className=" w-full"
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          {words.map((word, idx) => (
            <motion.div
              className={`flex overflow-hidden ${idx === 1 && "pl-16"}`}
              key={idx}
            >
              {word.map((element, subIdx) => (
                <motion.div
                  variants={childrenVariant}
                  key={subIdx}
                  className=" font-bebasNeue  text-firstAccent text-8xl "
                >
                  {element === " " ? "\u00A0" : element}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.h1>
        <motion.p className="  text-3xl font-semibold max-w-3xl  font-montserrat text-thirdAccent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          animi rem accusantium porro maiores cum laborum natus hic doloribus
          aut iste unde explicabo dolorum, reprehenderit dolor. Unde adipisci
          nesciunt cum!
        </motion.p>
      </div>
    </motion.header>
  );
};
