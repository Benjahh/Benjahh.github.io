import { motion } from 'framer-motion';
import { heroText } from '@/lib/data';

export const HeroCard = () => {
  const words = heroText.map(({ text }) => [...text, '\u00A0']);
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
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.8 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.8 },
    },
  };

  return (
    <motion.header className="card__border  bg-secondAccent ">
      <div className="flex flex-col h-full w-full  justify-end xl:gap-10  gap-2 md:gap-4  ">
        <motion.h1
          className=" w-full flex flex-col  font-bebasNeue   text-firstAccent  leading-none text-[40px] xl:text-9xl text-4xl sm:text-7xl md:text-7xl lg:text-8xl"
          initial="hidden"
          animate="visible"
          variants={variant}
        >
          {words.map((word, idx) => (
            <motion.div
              className={`flex overflow-hidden ${
                idx === 1 ? 'lg:pl-16 pl-4 md:pl-8 ' : 'text-white'
              }`}
              key={idx}
            >
              {word.map((element, subIdx) => (
                <motion.div variants={childrenVariant} key={subIdx}>
                  {element === ' ' ? '\u00A0' : element}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.h1>
        <motion.p className=" lg:text-3xl md:text-2xl sm:text-3xl xl:text-5xl text-xl font-semibold max-w-3xl xl:max-w-5xl font-montserrat text-thirdAccent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          animi rem accusantium porro maiores cum laborum natus hic doloribus
          aut!
        </motion.p>
      </div>
    </motion.header>
  );
};
