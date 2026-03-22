import { SiJavascript, SiDocker, SiTypescript, SiPostgresql, SiPostman, SiMongodb, SiCss3, SiSpringboot, SiHtml5, SiPhp, SiExpress, SiLaravel, SiMysql, SiFirebase, SiReact, SiTailwindcss,SiBootstrap, SiNextdotjs, SiChakraui, SiGit, SiGithub, SiFigma, SiNpm, SiVisualstudiocode, SiNotion, SiDaisyui} from "react-icons/si"

import { HiCode } from "react-icons/hi";
import { HiServerStack, HiCube } from "react-icons/hi2";
import { BiCodeCurly } from "react-icons/bi";
import { Categorie } from "./skillCard/interfaces";
import {FaJava} from "react-icons/fa";
import { Language } from "@/context/LanguageContext";

export const getCategories = (language: Language): Categorie[] => {
  const levels = language === 'es'
    ? {
      intermediate: 'Intermedio',
      fundamentals: 'Fundamentos',
      advanced: 'Avanzado',
    }
    : {
      intermediate: 'Intermediate',
      fundamentals: 'Fundamentals',
      advanced: 'Advanced',
    }

  return [
  {
    name: language === 'es' ? 'Lenguajes' : 'Languages',
    icon: <BiCodeCurly/>,
    skills: [
      {
        name: 'JavaScript',
        color: 'text-yellow-500',
        icon: <SiJavascript className="rounded-sm"/>,
        level: levels.intermediate,
        version: 'ES6'
      },
      {
        name: 'TypeScript',
        color: 'text-blue-600',
        icon: <SiTypescript/>,
        level: levels.intermediate,
        version: 'ES6'
      },
      {
        name: 'Java',
        color: 'text-red-500',
        icon: <FaJava/>,
        level: levels.fundamentals,
        version: '17'
      },
      {
        name: 'HTML',
        color: 'text-red-500',
        icon: <SiHtml5/>,
        level: levels.advanced,
        version: '5'
      },
      {
        name: 'CSS',
        color: 'text-blue-500',
        icon: <SiCss3/>,
        level: levels.intermediate,
        version: '3'
      },
      {
        name: 'PHP',
        color: 'text-blue-600',
        icon: <SiPhp/>,
        level: levels.fundamentals,
        version: '7'
      }
    ]
  },
  {
    name: 'Backend',
    icon: <HiServerStack/>,
    skills: [
      {
        name: 'Spring Boot',
        color: 'text-green-500',
        icon: <SiSpringboot/>,
        level: levels.fundamentals,
        version: '3.1.2'
      },
      {
        name: 'Express',
        color: 'text-white',
        icon: <SiExpress/>,
        level: levels.fundamentals,
        version: '4.18'
      },
      {
        name: 'Laravel',
        color: 'text-red-500',
        icon: <SiLaravel/>,
        level: levels.fundamentals,
        version: '9'
      },
      {
        name: 'Firebase',
        color: 'text-yellow-500',
        icon: <SiFirebase/>,
        level: levels.fundamentals,
        version: '9.6'
      },
      {
        name: 'MongoDB',
        color: 'text-green-500',
        icon: <SiMongodb/>,
        level: levels.fundamentals,
        version: '5'
      },
      {
        name: 'PostgreSQL',
        color: 'text-blue-500',
        icon: <SiPostgresql/>,
        level: levels.fundamentals,
        version: '15'
      },
      {
        name: 'MySQL',
        color: 'text-blue-500',
        icon: <SiMysql/>,
        level: levels.fundamentals,
        version: '8'
      },  
    ]
  },
  {
    name: 'Frontend',
    icon: <HiCode/>,
    skills: [
      {
        name: 'React',
        color: 'text-blue-500',
        icon: <SiReact/>,
        level: levels.intermediate,
        version: '16'
      },
      {
        name: 'Tailwind CSS',
        color: 'text-sky-500',
        icon: <SiTailwindcss/>,
        level: levels.intermediate,
        version: '3'
      },
      {
        name: 'NextJS',
        color: 'text-black dark:text-white',
        icon: <SiNextdotjs/>,
        level: levels.intermediate,
        version: '13'
      },
      {
        name: 'ChakraUI',
        color: 'text-teal-400',
        icon: <SiChakraui/>,
        level: levels.intermediate,
      },
      {
        name: 'DaisyUI',
        color: '',
        icon: <SiDaisyui/>,
        level: levels.fundamentals
      },
      {
        name: 'NextUI',
        color: '',
        icon: <div className='flex justify-center items-center bg-black p-1 rounded-xl font-light text-5xl text-white w-[80px] h-full'> UI </div>,
        level: levels.fundamentals
      },
      {
        name: 'Bootstrap',
        color: 'text-purple-500',
        icon: <SiBootstrap/>,
        level: levels.fundamentals,
        version: '8'
      },
    ]
  },
  {
    name: language === 'es' ? 'Herramientas' : 'Tools',
    icon: <HiCube/>,
    skills: [
      {
        name: 'Postman',
        color: 'text-orange-600',
        icon: <SiPostman/>,
        level: levels.intermediate,
      },
      {
        name: 'Docker',
        color: 'text-blue-500',
        icon: <SiDocker/>,
        level: levels.fundamentals,
      },
      {
        name: 'Git',
        color: 'text-red-500',
        icon: <SiGit/>,
        level: levels.intermediate,
        version: '2'
      },
      {
        name: 'Github',
        color: 'text-black dark:text-white',
        icon: <SiGithub/>,
        level: levels.intermediate,
      },
      {
        name: 'Figma',
        color: 'text-purple-500',
        icon: <SiFigma/>,
        level: levels.fundamentals,
        version: '7'
      },
      {
        name: 'npm',
        color: 'text-red-500',
        icon: <SiNpm/>,
        level: levels.intermediate,
        version: '24'
      },
      {
        name: 'Visual Studio Code',
        color: 'text-blue-500',
        icon: <SiVisualstudiocode/>,
        level: levels.advanced,
      },
      {
        name: 'Notion',
        color: 'text-black dark:text-white',
        icon: <SiNotion/>,
        level: levels.advanced,
      }
    ]
  }
]
}