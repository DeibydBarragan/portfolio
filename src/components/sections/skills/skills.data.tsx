import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiPhp, SiNodedotjs, SiExpress, SiLaravel, SiMysql, SiFirebase, SiReact, SiTailwindcss,SiBootstrap, SiNextdotjs, SiChakraui, SiGit, SiGithub, SiFigma, SiNpm, SiComposer, SiVisualstudiocode, SiNotion} from "react-icons/Si"

import { HiCode } from "react-icons/hi";
import { HiServerStack, HiCube } from "react-icons/hi2";
import { BiCodeCurly } from "react-icons/bi";

export const categories = [
  {
    name: 'Lenguajes',
    icon: <BiCodeCurly/>,
    skills: [
      {
        name: 'JavaScript',
        color: 'text-yellow-500',
        icon: <SiJavascript/>,
        level: 'Avanzado',
        version: 'ES6'
      },
      {
        name: 'TypeScript',
        color: 'text-blue-600',
        icon: <SiJavascript/>,
        level: 'Avanzado',
        version: 'ES6'
      },
      {
        name: 'HTML',
        color: 'text-red-500',
        icon: <SiHtml5/>,
        level: 'Avanzado',
        version: '5'
      },
      {
        name: 'CSS',
        color: 'text-blue-500',
        icon: <SiCss3/>,
        level: 'Avanzado',
        version: '3'
      },
      {
        name: 'PHP',
        color: 'text-blue-600',
        icon: <SiPhp/>,
        level: 'Intermedio',
        version: '7'
      }
    ]
  },
  {
    name: 'Backend',
    icon: <HiServerStack/>,
    skills: [
      {
        name: 'Node.js',
        color: 'text-green-500',
        icon: <SiNodedotjs/>,
        level: 'Avanzado',
        version: '18'
      },
      {
        name: 'Express',
        color: 'text-green-500',
        icon: <SiExpress/>,
        level: 'Avanzado',
        version: '4'
      },
      {
        name: 'Laravel',
        color: 'text-red-500',
        icon: <SiLaravel/>,
        level: 'Intermedio',
        version: '8'
      },
      {
        name: 'MySQL',
        color: 'text-blue-500',
        icon: <SiMysql/>,
        level: 'Intermedio',
        version: '8'
      },
      {
        name: 'Firebase',
        color: 'text-yellow-500',
        icon: <SiFirebase/>,
        level: 'Intermedio',
        version: '9.6'
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
        level: 'Avanzado',
        version: '16'
      },
      {
        name: 'Tailwind CSS',
        color: 'text-sky-500',
        icon: <SiTailwindcss/>,
        level: 'Avanzado',
        version: '3'
      },
      {
        name: 'Bootstrap',
        color: 'text-purple-500',
        icon: <SiBootstrap/>,
        level: 'Intermedio',
        version: '8'
      },
      {
        name: 'NextJS',
        color: 'text-black dark:text-white',
        icon: <SiNextdotjs/>,
        level: 'Avanzado',
        version: '13'
      },
      {
        name: 'ChakraUI',
        color: 'text-teal-400',
        icon: <SiChakraui/>,
        level: 'Avanzado',
      },
    ]
  },
  {
    name: 'Herramientas',
    icon: <HiCube/>,
    skills: [
      {
        name: 'Git',
        color: 'text-red-500',
        icon: <SiGit/>,
        level: 'Intermedio',
        version: '2'
      },
      {
        name: 'Github',
        color: 'text-black dark:text-white',
        icon: <SiGithub/>,
        level: 'Avanzado',
      },
      {
        name: 'Figma',
        color: 'text-purple-500',
        icon: <SiFigma/>,
        level: 'Principiante',
        version: '7'
      },
      {
        name: 'npm',
        color: 'text-red-500',
        icon: <SiNpm/>,
        level: 'Intermedio',
        version: '24'
      },
      {
        name: 'Visual Studio Code',
        color: 'text-blue-500',
        icon: <SiVisualstudiocode/>,
        level: 'Avanzado',
      },
      {
        name: 'Notion',
        color: 'text-black dark:text-white',
        icon: <SiNotion/>,
        level: 'Avanzado',
      }
    ]
  }
]