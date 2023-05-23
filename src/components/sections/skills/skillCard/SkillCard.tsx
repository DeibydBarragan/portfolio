import { Skill } from "./interfaces"

type Props = {
  skill: Skill
}

export default function SkillCard({skill}: Props) {
  return (
    <div
      className="flex rounded-xl p-4 gap-4 hover:-translate-y-1 transition ease-in-out bg-white shadow-sm dark:bg-zinc-950/80 backdrop-blur-sm dark:border-none"
    >
      <div>
        {skill.icon}
      </div>
      <div className="flex flex-col justify-center w-full gap-3">
        <h4
          className='text-md font-bold'
        >
          {skill.name}
        </h4>
        <hr className="border-gray-300 dark:border-gray-500"/>
        <p className="text-gray-500 dark:text-gray-400">
          {skill.level}
        </p>
      </div>
    </div>
  )
}