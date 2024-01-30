import { motion } from 'framer-motion';
import { heroText } from '@/lib/data';

export const Hero = () => {
  const words = heroText.map(({ text }) => [...text, ' ']);
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
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.8 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.8 },
    },
  };

  return (
    <header className=" flex flex-col gap-4">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variant}
        transition={{
          staggerChildren: 0.025,
        }}
      >
        {words.map((word, idx) => (
          <motion.div
            className={`flex overflow-hidden ${idx === 1 && 'pl-16'}`}
            key={idx}
          >
            {word.map((element, subIdx) => (
              <motion.div
                className="w-7 items-center justify-center flex"
                variants={childrenVariant}
                key={subIdx}
              >
                <motion.div
                  variants={variant}
                  initial="hidden"
                  animate="visible"
                  className="block font-bebasNeue w-auto h-auto text-white text-7xl"
                >
                  {element}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.h1>
    </header>
  );
};
