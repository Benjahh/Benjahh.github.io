import { testArray } from '@/components/utils/ProjectGrid';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const IndividualProjectCard = ({
  id,
  handleProjectId,
  handleViewProjects,
}) => {
  const toView = testArray.find((project) => project.id == id);
  const { name } = toView;

  return (
    <article
      className="text-white  w-full h-full
     top-0  flex-col  
     flex rounded-2xl  "
    >
      <figure className="bg-secondAccent rounded-t-xl  w-full h-full"></figure>
      <section className="bg-black    rounded-b-xl p-8  h-full flex flex-col ">
        <div className="gap-2 flex flex-col">
          <h1 className="font-montserrat text-white text-2xl font-bold">
            Full-Stack App
          </h1>
          <header className="font-medium text-firstAccent font-bebasNeue text-4xl tracking-wide">
            Ai Image Generation App
          </header>
          <p className="font-montserrat text-xl font-medium text-thirdAccent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            saepe reprehenderit laudantium qui odio quisquam dolores adipisci
            error optio deserunt vel dolor, expedita dolore voluptatibus
            aspernatur velit voluptas! A, reiciendis.
          </p>
        </div>
        <div className="bg-white h-[1px] my-6" />
        <div className="gap-4 flex absolute bottom-0 overflow-visible right-0 m-6 flex-row text-base font-montserrat font-bold self-end">
          <motion.a
            whileHover={{
              backgroundColor: 'rgb(161 161 170)',
            }}
            transition={{ duration: 0.3 }}
            href=""
            className="bg-white rounded-lg w-[170px] items-center justify-center text-black flex gap-2 px-4 py-3"
          >
            <FaGithub size={20} />
            <span>Source Code</span>
          </motion.a>
          <motion.a
            whileHover={{
              backgroundColor: 'rgb(39 39 42)',
            }}
            transition={{ duration: 0.3 }}
            href=""
            className=" border-secondAccent border w-[170px]  items-center justify-center rounded-lg flex gap-2  text-white px-4 py-3"
          >
            <FiExternalLink size={20} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </section>

      <motion.button
        whileHover={{
          scale: 1.05,
          color: '#ffffff',
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 right-0 m-6 text-firstAccent hover:cursor-pointer "
        onClick={() => {
          handleProjectId(null);
          handleViewProjects(true);
        }}
      >
        <FaRegWindowClose size={30} />
      </motion.button>
    </article>
  );
};
