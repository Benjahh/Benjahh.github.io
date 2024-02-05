import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { GithubCard } from "@/components/cards/GithubCard";
import { HeroCard } from "@/components/cards/HeroCard";
import { LanguageCard } from "@/components/cards/LanguageCard";
import { LinkedInCard } from "@/components/cards/LinkedInCard";
import { MailCard } from "@/components/cards/MailCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ResumeCard } from "@/components/cards/ResumeCard";
import { TechStackCard } from "@/components/cards/TechStackCard";
import { WeatherCard } from "@/components/cards/WeatherCard";

export const heroText = [
  {
    text: "Lucas Aguero",
    padding: "0rem",
  },
  {
    text: "Full-Stack Developer",
    padding: "2rem",
  },
];
export const projects = [
  {
    projectId: "01",
    projectName: "WebScrapingApp",
    projectType: "Practice Project",
    projectRepo: "https://github.com/Benjahh/benjahh.github.io",
    projectLink: "https://facebook.com",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?",

    projectCreation: "2023",
    projectSkill: [
      {
        skillName: "NextJS,",
        color: "#ff1e7a",
      },
      {
        skillName: "TailWindcss,",
        color: "#FF5337",
      },
      {
        skillName: "TypeScript,",
        color: "#5e3ad8",
      },
      {
        skillName: "HeadlessUI,",
        color: "#5e3ad8",
      },
      {
        skillName: "Redux",
        color: "#5e3ad8",
      },
    ],
  },
  {
    projectId: "02",
    projectName: "ThreadsApp",
    projectType: "Practice Project",
    projectRepo: "https://github.com/Benjahh/benjahh.github.io",
    projectLink: "https://google.com",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?",

    projectCreation: "2023",
    projectSkill: [
      {
        skillName: "NextJS,",
        color: "#ff1e7a",
      },
      {
        skillName: "TailWindcss,",
        color: "#FF5337",
      },
      {
        skillName: "TypeScript,",
        color: "#5e3ad8",
      },
      {
        skillName: "HeadlessUI,",
        color: "#5e3ad8",
      },
      {
        skillName: "Redux",
        color: "#5e3ad8",
      },
    ],
  },
  {
    projectId: "03",
    projectName: "CarShowcaseApp",
    projectType: "Practice Project",
    projectRepo: "https://github.com/Benjahh/benjahh.github.io",
    projectLink: "https://google.com",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?",

    projectCreation: "2023",
    projectSkill: [
      {
        skillName: "NextJS,",
        color: "#ff1e7a",
      },
      {
        skillName: "TailWindcss,",
        color: "#FF5337",
      },
      {
        skillName: "TypeScript,",
        color: "#5e3ad8",
      },
      {
        skillName: "HeadlessUI,",
        color: "#5e3ad8",
      },
      {
        skillName: "Redux",
        color: "#5e3ad8",
      },
    ],
  },
  {
    projectId: "04",
    projectName: "BlockChainApp",
    projectType: "Practice Project",
    projectRepo: "https://github.com/Benjahh/benjahh.github.io",
    projectLink: "https://google.com",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni quam molestiae culpa unde sequi cum nesciunt repellat, similique quia atque eaque suscipit nam possimus quos, labore ipsam velit laboriosam?",

    projectCreation: "2023",
    projectSkill: [
      {
        skillName: "NextJS,",
        color: "#ff1e7a",
      },
      {
        skillName: "TailWindcss,",
        color: "#FF5337",
      },
      {
        skillName: "TypeScript,",
        color: "#5e3ad8",
      },
      {
        skillName: "HeadlessUI,",
        color: "#5e3ad8",
      },
      {
        skillName: "Redux",
        color: "#5e3ad8",
      },
    ],
  },
];

export const techStack = [
  {
    id: "1",
    techName: "Next.js",
    TechIcon: <SiNextdotjs size={40} />,
  },
  {
    id: "2",
    techName: "React",
    TechIcon: <SiReact size={40} />,
  },
  {
    id: "3",
    techName: "Node.js",
    TechIcon: <SiNodedotjs size={40} />,
  },
  {
    id: "4",
    techName: "Express.js",
    TechIcon: <SiExpress size={40} />,
  },
  {
    id: "5",
    techName: "TailwindCSS",
    TechIcon: <SiTailwindcss size={40} />,
  },
  {
    id: "6",
    techName: "PostgreSQL",
    TechIcon: <SiPostgresql size={40} />,
  },
  {
    id: "7",
    techName: "CSS3",
    TechIcon: <SiCss3 size={40} />,
  },
  {
    id: "8",
    techName: "HTML5",
    TechIcon: <SiHtml5 size={40} />,
  },
  {
    id: "9",
    techName: "Javascript",
    TechIcon: <SiJavascript size={40} />,
  },
];

export const cardComponents = [
  {
    id: 1,
    componentStyle: "col-span-6  row-span-6",
    Component: <HeroCard />,
  },
  {
    id: 2,
    componentStyle: "col-span-2 row-span-3",
    Component: <LinkedInCard />,
  },
  {
    id: 3,
    componentStyle: "col-span-2 row-span-3",
    Component: <ResumeCard />,
  },
  {
    id: 4,
    componentStyle: "col-span-2  row-span-3",
    Component: <TechStackCard />,
  },
  {
    id: 5,
    componentStyle: "col-span-2  row-span-3",
    Component: <WeatherCard />,
  },
  {
    id: 6,
    componentStyle: "col-span-4  row-span-3",
    Component: <GithubCard />,
  },
  {
    id: 7,
    componentStyle: "col-span-2  row-span-3",
    Component: <LanguageCard />,
  },
  {
    id: 8,
    componentStyle: "col-span-4  row-span-3",
    Component: <ProjectCard />,
  },
  {
    id: 9,
    componentStyle: "col-span-2  row-span-3",
    Component: <MailCard />,
  },
];

export const whileHoverStyle = {
  scale: 1.02,
  backgroundColor: "rgba(39, 39, 42, 0.5)",
  color: "#EBEB5E",
};
