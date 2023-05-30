import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, scroller } from 'react-scroll'

type Props = {}

export default function UpButton({}: Props) {
  const [show, setShow] =useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const handleClick = () => {
    scroller.scrollTo('hero', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50
    })
  }

  return (
    <AnimatePresence>
      {show && (<motion.button
        className='bottom-8 cursor-pointer right-8 sm:bottom-12 sm:right-12 p-3 fixed rounded-full text-white z-40 bg-gradient-to-r from-indigo-800 via-purple-600 to-orange-600  hover:from-indigo-700 hover:via-purple-500 hover:to-orange-500 transition ease-in-out duration-200'
        aria-label='Ir arriba'
        onClick={handleClick}
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 10}}
        whileTap={{scale: 0.9}}
      >
        <HiArrowUp className='text-3xl'/>
      </motion.button>)}
    </AnimatePresence>
  )
}