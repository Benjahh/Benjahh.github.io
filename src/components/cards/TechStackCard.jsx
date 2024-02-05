import { techStack } from "@/lib/data";
import { TechIcons } from "../utils/TechIcons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const TechStackCard = () => {
  return (
    <div className="card__border bg-secondAccent">
      <div className="grid-cols-3 items-center justify-items-center gap-1 grid grid-rows-2 h-full w-full">
        {techStack.map(({ techName, id, TechIcon }) => (
          <TooltipProvider delayDuration="200" key={id}>
            <Tooltip>
              <TooltipTrigger>
                <TechIcons techName={techName} TechIcon={TechIcon} />
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
