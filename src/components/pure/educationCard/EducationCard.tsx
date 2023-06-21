import React from 'react'
import { motion } from 'framer-motion';
import { AiFillRightCircle } from 'react-icons/ai';

type Props = {
  children: React.ReactNode
  delay?: number
}

export default function EducationCard({children, delay}: Props) {

  const liAnimation = {
    initial: {
      opacity: 0,
      x: -10
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
  }

  return (
    <div className='relative flex flex-col gap-3 divide-y rounded-lg bg-white/70 dark:bg-zinc-950/70 p-6'>
      <motion.div
        className='flex items-center justify-between gap-3'
        transition={{delay: delay ? 0.3 * delay : 0.3}}
        {...liAnimation}
      >
        <div className='w-1/12'>
          <AiFillRightCircle size={40} className="text-indigo-700"/>
        </div>
        <div className='w-10/12 sm:w-11/12'>
          {children}
        </div>
      </motion.div>
    </div>
  )
}