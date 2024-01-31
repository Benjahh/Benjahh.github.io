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
    <motion.header className="test-border  bg-secondAccent ">
      <motion.h1
        className="absolute left-0 lg:m-12"
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
                className=" items-center justify-center  flex"
                variants={childrenVariant}
                key={subIdx}
              >
                <motion.div
                  variants={variant}
                  initial="hidden"
                  animate="visible"
                  className=" font-bebasNeue w-[40px] h-[100px] flex items-center justify-center text-firstAccent text-8xl line-"
                >
                  {element}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.h1>
      <motion.p className=" absolute lg:m-12 bottom-0 left-0 text-3xl font-semibold max-w-6xl  font-montserrat  text-thirdAccent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi
        rem accusantium porro maiores cum laborum natus hic doloribus aut iste
        unde explicabo dolorum, reprehenderit dolor. Unde adipisci nesciunt cum!
      </motion.p>
    </motion.header>
  );
};
