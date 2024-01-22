import { techStack } from '@/lib/data';

export const TechStack = ({ techName, TechIcon }) => {
  return (
    <div className="row-span-1 flex items-center justify-center rounded-md  col-span-1">
      <div className="bg-black  p-4  rounded-lg bg-opacity-35">{TechIcon}</div>
    </div>
  );
};
