import React from 'react'
import { motion } from 'framer-motion';
import { AiFillRightCircle } from 'react-icons/ai';
import { fadeIn } from '@/animations/anim';

type Props = {
  children: React.ReactNode
  delay?: number
}

export default function EducationCard({children, delay}: Props) {

  return (
    <div className='relative flex flex-col gap-3 divide-y rounded-lg bg-white/70 dark:bg-zinc-950/70 p-6'>
      <motion.div
        className='flex items-start justify-between gap-3'
        transition={{delay: delay ? 0.3 * delay : 0.3}}
        {...fadeIn}
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