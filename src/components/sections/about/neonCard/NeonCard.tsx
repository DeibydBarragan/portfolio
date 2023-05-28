import { cardData } from './interfaces';
import { motion } from 'framer-motion';

export default function NeonCard({index, borderColor = null, shadowColor = null, textColor = null, icon = null, description, children = null}: cardData) {

  return (
    <motion.div
      className='flex bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl shadow-sm rounded-md items-center justify-center gap-2 p-3'
      initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 * index }}  
    >
      {description}
      <div className={`${textColor} text-2xl`}>
        {children}
        {icon}
      </div>
    </motion.div>
  )
}