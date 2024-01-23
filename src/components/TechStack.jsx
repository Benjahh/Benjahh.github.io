import { techStack } from '@/lib/data';

export const TechStack = ({ techName, TechIcon }) => {
  return (
    <div className="row-span-1 w-[100px] p-3 bg-opacity-35 bg-black items-center flex flex-col justify-center  rounded-lg col-span-1">
      <div className="  ">{TechIcon}</div>
      <div>{techName}</div>
    </div>
  );
};
