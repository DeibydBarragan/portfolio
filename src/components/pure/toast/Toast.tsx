import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CgClose } from 'react-icons/cg'
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'

type Props = {
  setMessage: (value: Message | null) => void,
  message: Message | null,
}

/**
 * This component returns a notification
 * @returns returns a notification
 */
const Toast = ({message, setMessage}: Props) => {

  /**
   * This function removes the notification after 8 seconds
   */
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null)
      }, 8000)
    }
  }, [message, setMessage])

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])


  return mounted ? createPortal(
    <AnimatePresence>
      {message &&
        <motion.div
          className={`fixed z-50 bottom-0 right-0 mb-4 mx-4 lg:mb-16 lg:mx-20 bg-white/50 backdrop-blur-sm border ${message.type === 'error' ? 'border-red-700' : message.type === 'success' ? 'border-green-700' : ''} dark:bg-zinc-900/50 text-black dark:text-white rounded-lg shadow-lg p-4 w-9/12 md:w-6/12 lg:w-4/12 xl:w-3/12 2xl:w-2/12}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50, transition: { type: 'spring', duration: 0.1, stiffness: 300, damping: 18 } }}
        >
          <div className='flex justify-between items-center border-b mb-2 pb-2 border-gray-400 dark:border-zinc-900'>
            <div className='flex items-center gap-3'>
              {message?.type === 'error'
                && <HiExclamationCircle className='text-red-700 dark:text-red-500 text-2xl' />
              }
              {message?.type === 'success'
                && <HiCheckCircle className='text-green-700 dark:text-green-500 text-2xl' />
              }
              <h4>{message?.title}</h4>
            </div>
            <CgClose className='bi bi-x-lg text-gray-500 dark:text-gray-700 cursor-pointer text-2xl opacity-70 hover:opacity-90' onClick={() => setMessage(null)} />
          </div>
          <div>
            <p className='text-md'>{message?.message}</p>
          </div>
        </motion.div>}
    </AnimatePresence>
    , document.body) : null
}

export default Toast