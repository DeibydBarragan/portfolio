import Section from "../Section"
import ProjectCard from "./projectComponent/ProjectCard"
import { ProjectsData } from "./projects.data"
import {Disclosure} from "@headlessui/react";
import {HiChevronDown} from "react-icons/hi";

type Props = {}

export default function Projects({}: Props) {
  return (
    <Section
      className="sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-5/12 gap-y-16"
      id="projects"
    >
      <h2>Projectos que he realizado</h2>
      {ProjectsData.map((project, index) => (
        <ProjectCard index={index} key={index} project={project}/>
      ))}
      <Disclosure>
        {({ open }) => (
            <>
              <Disclosure.Button className="rounded-lg flex justify-between items-center py-2 px-3 w-full transition ease-in-out bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm border dark:border-none">
                <h4 className="text-sm sm:text-base">Otros proyectos</h4>
                <HiChevronDown
                    size={25}
                    className={open ? 'rotate-180 transform' : ''}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-sm text-gray-700 dark:text-gray-400">
                Otros proyectos
              </Disclosure.Panel>
            </>
        )}
      </Disclosure>
    </Section>
  )
}