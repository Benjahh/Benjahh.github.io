import { techStack } from '@/lib/data';
import { TechIcons } from '../utils/TechIcons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const TechStackCard = () => {
  return (
    <div className="test-border gap-2 bg-secondAccent flex-col ">
      <div className="grid-cols-3 z-10 items-center justify-items-center  grid grid-rows-2 h-full w-full  font-montserrat font-semibold">
        {techStack.map(({ techName, id, TechIcon }) => (
          <TooltipProvider delayDuration="200">
            <Tooltip>
              <TooltipTrigger>
                <TechIcons key={id} techName={techName} TechIcon={TechIcon} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{techName}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};
