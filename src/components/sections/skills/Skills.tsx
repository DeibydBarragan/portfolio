import { Tab } from "@headlessui/react"
import SkillCard from "./skillCard/SkillCard"
import { categories } from "./skills.data"
import Section from "../Section"
import BgShapes from "@/components/pure/bgShapes/BgShapes";

type Props = {}

export default function Skills({}: Props) {

  return (
    <Section
      className="sm:w-11/12 lg:w-10/12 xl:w-7/12 2xl:w-5/12 text-gray-600 dark:text-gray-300 "
      id="skills"
    >
      <BgShapes
        className="bg-sky-500 h-96 w-96"
      />
      <BgShapes
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-72 w-72 top-30 right-10"
      />
      <h2>Habilidades</h2>
      <Tab.Group>
        <Tab.List className="bg-white dark:bg-zinc-950/70 backdrop-blur-sm shadow-md dark:border-nonefont-semibold flex overflow-x-scroll max-w-full rounded-xl md:overflow-x-auto gap-4 p-2 justify-evenly">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className="rounded-lg p-4 font-semibold"
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