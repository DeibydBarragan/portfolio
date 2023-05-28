import { Skill } from "./interfaces"
import classNames from "classnames"
import { motion } from 'framer-motion';

type Props = {
  skill: Skill
  index: number
}

export default function SkillCard({skill, index}: Props) {
  const iconClasses = classNames(
    'text-[80px]',
    skill.color
  )
  return (
    <motion.div
      className="flex rounded-xl p-4 gap-4 hover:-translate-y-1 transition ease-in-out bg-white shadow-sm dark:bg-zinc-950/80 backdrop-blur-sm dark:border-none"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index }}
    >
      <div className={iconClasses}>
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
    </motion.div>
  )
}