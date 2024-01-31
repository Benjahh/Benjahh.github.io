import { techStack } from '@/lib/data';
import { TechIcon } from '../utils/TechIcon';

export const TechStackCard = () => {
  return (
    <>
      <h1 className="font-bebasNeue font-semibold text-7xl  text-thirdAccent absolute ">
        Tech Stack
      </h1>
      <div className="grid-cols-3 z-10  gap-2 items-center justify-items-center  grid-rows-3 w-full grid  font-montserrat font-semibold">
        {techStack.map(({ techName, id }) => (
          <TechIcon key={id} techName={techName} TechIcon={TechIcon} />
        ))}
      </div>
    </>
  );
};
