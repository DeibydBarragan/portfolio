import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  icon: React.ReactNode
  description: string
}

export default function IconTooltip({icon, description}: Props) {
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
        {icon}
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-sm mt-1 absolute top-full p-2 px-4 bg-black/50 dark:bg-gray-700/30 backdrop-blur-sm rounded-lg text-white text-center"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 10
            }}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}