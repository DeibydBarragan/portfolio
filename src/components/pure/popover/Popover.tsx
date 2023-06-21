import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { flyDown } from '@/animations/anim'

type Props = {
  show: any,
  clear: (fieldName?: string) => void,
  fieldName: string
}

const Popover = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='relative'>
      { children }
    </div>
  )
}

const PopoverMessage = ({ show, clear, fieldName }: Props) => {
  useEffect(() => {
    /**
     * If clear is defined, set a timeout to clear the errors of the form
     */
    if (clear) {
      const timeout = setTimeout(() => {
        /**
         * If fieldName is defined, clear the errors of the field
         */
        fieldName ? clear(fieldName) : clear()
      }, 8000)
      return () => clearTimeout(timeout)
    }
  }, [show, clear, fieldName])

  return (
    <AnimatePresence>
      { show && (
        <motion.div className="absolute z-20 top-12 right-1 w-auto px-4 py-2 bg-white/40 backdrop-blur-md border-red-400 dark:border-zinc-800 dark:bg-black/40 border rounded-lg shadow-lg"
          {...flyDown}
        >
          <p className='text-red-600 dark:text-red-600 font-medium break-words text-md'>{ show.toString() }</p>
        </motion.div>)}
    </AnimatePresence>
  )
}

Popover.Message = PopoverMessage

export default Popover