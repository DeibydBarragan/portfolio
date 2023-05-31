import Section from "../Section"
import ProjectCard from "./projectComponent/ProjectCard"
import { ProjectsData } from "./projects.data"

type Props = {}

export default function Projects({}: Props) {
  return (
    <Section
      className="sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 gap-6"
      id="projects"
    >
      <h2>Projectos que he realizado</h2>
      {ProjectsData.map((project, index) => (
        <ProjectCard index={index} key={index} project={project}/>
      ))}
    </Section>
  )
}