import { Skill } from "./interfaces"

type Props = {
  skill: Skill
}

export default function SkillCard({skill}: Props) {
  return (
    <div
      className="flex rounded-xl p-4 gap-4 hover:-translate-y-1 transition ease-in-out bg-slate-100  dark:bg-slate-900 border dark:border-indigo-700"
    >
      <div>
        {skill.icon}
      </div>
      <div className="flex flex-col justify-center w-full gap-3">
        <h4
          className='text-gray-800 dark:text-gray-200 text-md font-bold'
        >
          {skill.name}
        </h4>
        <hr/>
        <p>
          {skill.level}
        </p>
      </div>
    </div>
  )
}