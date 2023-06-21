import { flyLeft, flyRight } from '@/animations/anim';
import { cardData } from './interfaces';
import { motion } from 'framer-motion';

export default function NeonCard({index, icon = null, description}: cardData) {

  return (
    <motion.div
      className='flex bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm rounded-md items-center justify-center gap-2 p-3'
      transition={{ delay: 0.4 * index }}  
      {...index % 2 === 0 ? flyRight : flyLeft }
    >
      {description}
      <div className='text-2xl'>
        {icon}
      </div>
    </motion.div>
  )
}