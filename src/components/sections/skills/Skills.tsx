import { Tab } from "@headlessui/react"
import SkillCard from "./skillCard/SkillCard"

type Props = {}

export default function Skills({}: Props) {
  return (
    <div
      className="section lg:w-10/12 xl:w-8/12 2xl:w-6/12"
      id="skills"
    >
      <h2>Habilidades</h2>
      <p>Tecnologías con las que he trabajado</p>
      <h3>Lenguajes de programación</h3>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab>Lenguajes de programación</Tab>
          <Tab>Frameworks Frontend</Tab>
          <Tab>Frameworks Backend</Tab>
          <Tab>Herramientas</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/**<div className="grid grid-cols-2 xl:grid-cols-6 gap-4">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>**/}
      <h3>Frameworks frontend</h3>
      <div className="bg-indigo-700 flex flex-wrap">
      </div>
      <h3>Frameworks backend</h3>
      <div className="bg-gray-500 flex flex-wrap">
      </div>
      <h3>Herramientas</h3>
      <div className="bg-white flex flex-wrap">
      </div>
    </div>
  )
}