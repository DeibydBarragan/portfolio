import { flyDownAndUp } from '@/animations/anim'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
  description: string
}

export default function Tooltip({description, children}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative flex items-center justify-center">
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}  
      >
        {children}
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-sm mt-1 w-max z-10 absolute top-full p-2 px-4 bg-black/50 dark:bg-gray-700/30 backdrop-blur-sm rounded-lg text-white text-center"
            {...flyDownAndUp}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}