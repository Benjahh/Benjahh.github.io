import { techStack } from '@/lib/data';
import { TechIcons } from '../utils/TechIcons';

export const TechStackCard = () => {
  return (
    <div className="test-border gap-2 bg-secondAccent flex-col ">
      <h1 className="font-bebasNeue font-semibold text-6xl tracking-wider  text-firstAccent absolute ">
        Tech Stack
      </h1>
      <div className="grid-cols-3 z-10  gap-2 items-center justify-items-center  grid-rows-3 w-full grid  font-montserrat font-semibold">
        {techStack.map(({ techName, id, TechIcon }) => (
          <TechIcons key={id} techName={techName} TechIcon={TechIcon} />
        ))}
      </div>
    </div>
  );
};
