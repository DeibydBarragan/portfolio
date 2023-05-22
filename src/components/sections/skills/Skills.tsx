import { Tab } from "@headlessui/react"
import SkillCard from "./skillCard/SkillCard"
import { categories } from "./skills.data"
import Section from "../Section"

type Props = {}

export default function Skills({}: Props) {

  return (
    <Section
      className="sm:w-11/12 lg:w-10/12 xl:w-7/12 2xl:w-5/12"
      id="skills"
    >
      <h2>Habilidades</h2>
      <p>Tecnologías con las que he trabajado</p>
      <Tab.Group>
        <Tab.List className="bg-white/30 dark:bg-gray-900 shadow-md dark:border-none text-black dark:text-white font-semibold flex overflow-x-scroll max-w-full rounded-xl md:overflow-x-auto gap-4 p-2 justify-evenly">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className="rounded-lg p-4 bg-sky-100 dark:bg-gray-950"
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="pt-3">
          {categories.map((category, index) => (
            <Tab.Panel
              key={index}
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg"
            >
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                />
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Section>
  )
}