import { motion } from 'framer-motion';
import { heroText } from '@/lib/data';

export const HeroCard = () => {
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
    <header className="  absolute left-0 m-10 flex flex-col  max-w-4xl gap-8 bottom-0">
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
      <motion.p className=" bottom-0 left-0 text-2xl font-semibold  font-montserrat  text-thirdAccent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi
        rem accusantium porro maiores cum laborum natus hic doloribus aut iste
        unde explicabo dolorum, reprehenderit dolor. Unde adipisci nesciunt cum!
      </motion.p>{' '}
    </header>
  );
};
