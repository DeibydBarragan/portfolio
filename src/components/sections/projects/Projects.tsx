import Section from "../Section"
import ProjectCard from "./projectComponent/ProjectCard"
import { getOtherProjects, getProjectsData } from "./projects.data"
import {HiChevronDown} from "react-icons/hi";
import OtherProjectCard from "@/components/sections/projects/projectComponent/OtherProjectCard";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Props = {}

export default function Projects({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage()
  const projectsData = getProjectsData(language)
  const otherProjects = getOtherProjects(language)

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Section
      className="sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-5/12 gap-y-16"
      id="projects"
    >
      <h2>{language === 'es' ? 'Proyectos que he realizado' : 'Projects I have built'}</h2>
      {projectsData.map((project, index) => (
        <ProjectCard index={index} key={index} project={project}/>
      ))}
      <div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg flex justify-between items-center py-2 px-3 w-full transition ease-in-out bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm border dark:border-none"
        >
          <h4 className="text-sm sm:text-base">{language === 'es' ? 'Otros proyectos' : 'Other projects'}</h4>
          <HiChevronDown
            size={25}
            className={isOpen ? 'rotate-180 transform' : ''}
          />
        </button>
        {isOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
            {otherProjects.map((project, index) => (
              <OtherProjectCard key={index} project={project}/>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}