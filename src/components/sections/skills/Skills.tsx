import { Tab } from "@headlessui/react"
import SkillCard from "./skillCard/SkillCard"
import { getCategories } from "./skills.data"
import Section from "../Section"
import BgShapes from "@/components/pure/bgShapes/BgShapes";
import classNames from "classnames";
import { useLanguage } from "@/context/LanguageContext";

type Props = {}

export default function Skills({}: Props) {
  const { language } = useLanguage()
  const categories = getCategories(language)

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
      <h2>{language === 'es' ? 'Habilidades' : 'Skills'}</h2>
      <Tab.Group>
        <Tab.List className="flex w-full items-center gap-1 overflow-x-auto rounded-xl bg-white/70 p-2 font-semibold shadow-md backdrop-blur-sm dark:bg-zinc-950/70 sm:justify-between">
          {categories.map((category) => (
            <Tab
              key={category.name}
              className={({ selected }) =>
                classNames(
                  "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 font-semibold transition ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                  selected
                    && "bg-indigo-500 text-white dark:bg-indigo-700 dark:text-white"
                )
              }
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
              className={classNames("grid w-full grid-cols-1 gap-4 rounded-lg sm:grid-cols-2", index !== categories.length - 1 && "md:grid-cols-3")}
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
