import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export const GithubCard = () => {
  return (
    <>
      <div className=" opacity-60 bg-contain  absolute  bg-no-repeat -z-10 h-full w-full" />
      <header className="absolute bottom-0 left-0 p-10 gap-1 flex flex-col">
        <h1 className="text-white tracking-wide font-bebasNeue  text-4xl brightness-125">
          My Github Profile
        </h1>
        <p className="brightness-125 text-thirdAccent font-semibold  font-montserrat text-2xl  ">
          ¡Source code for all my projects available there!
        </p>
      </header>
      <FiExternalLink className="absolute top-0 right-0  m-10" size={20} />
      <FaGithub size={40} className="absolute top-0 left-0 m-10" />
    </>
  );
};
