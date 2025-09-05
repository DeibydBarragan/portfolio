import Section from "../Section"
import ProjectCard from "./projectComponent/ProjectCard"
import {OtherProjects, ProjectsData} from "./projects.data"
import {HiChevronDown} from "react-icons/hi";
import OtherProjectCard from "@/components/sections/projects/projectComponent/OtherProjectCard";
import { useEffect, useState } from "react";

type Props = {}

export default function Projects({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Section
      className="sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-5/12 gap-y-16"
      id="projects"
    >
      <h2>Proyectos que he realizado</h2>
      {ProjectsData.map((project, index) => (
        <ProjectCard index={index} key={index} project={project}/>
      ))}
      <div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg flex justify-between items-center py-2 px-3 w-full transition ease-in-out bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm border dark:border-none"
        >
          <h4 className="text-sm sm:text-base">Otros proyectos</h4>
          <HiChevronDown
            size={25}
            className={isOpen ? 'rotate-180 transform' : ''}
          />
        </button>
        {isOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            {OtherProjects.map((project, index) => (
              <OtherProjectCard key={index} project={project}/>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}