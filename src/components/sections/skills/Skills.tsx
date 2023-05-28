import { Tab } from "@headlessui/react"
import SkillCard from "./skillCard/SkillCard"
import { categories } from "./skills.data"
import Section from "../Section"
import BgShapes from "@/components/pure/bgShapes/BgShapes";
import classNames from "classnames";
import { motion } from "framer-motion";

type Props = {}

export default function Skills({}: Props) {

  return (
    <Section
      className="sm:w-11/12 lg:w-10/12 xl:w-7/12 2xl:w-5/12 text-gray-600 dark:text-gray-300 "
      id="skills"
    >
      <BgShapes
        className="bg-purple-400 dark:bg-teal-700 h-96 w-96"
      />
      <BgShapes
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-72 w-72 top-30 right-10"
      />
      <h2>Habilidades</h2>
      <Tab.Group>
        <Tab.List className="font-semibold bg-white dark:bg-zinc-950/70 backdrop-blur-sm shadow-md dark:border-nonefont-semibold flex overflow-x-scroll rounded-xl md:overflow-x-auto gap-4 p-2 justify-start  md:justify-evenly">
          {categories.map((category, index) => (
            <Tab
              as={motion.div}
              key={index}
              className={({ selected }) =>
                classNames(
                  "rounded-lg p-3 font-semibold cursor-pointer flex gap-2 items-center transition ease-in-out",
                  selected
                    && "bg-indigo-500 text-white dark:bg-indigo-700 dark:text-white outline-none"
                )
              }
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 * index }}
            >
              <span className="text-xl">
                {category.icon}
              </span>
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
                  index={index}
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