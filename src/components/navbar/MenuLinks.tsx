import { useContext, useEffect, useState } from 'react'
import { Route } from './interfaces'
import Navlink from './Navlink'
import { HiOutlineMenu } from 'react-icons/hi'
import { HiOutlineX } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'
import { NavbarContext } from '../context/NavbarContext'

type Props = {
  routes: Route[]
}

export default function MenuLinks({routes}: Props) {
  const { isOpen, setIsOpen } = useContext(NavbarContext)

  return (
    <div className='relative md:hidden'>
      {
        isOpen ? 
        <HiOutlineX
          onClick={() => setIsOpen(false)}
          className='nav-icons'
          size='1.5rem'
        /> :
        <HiOutlineMenu
          onClick={() => setIsOpen(true)}
          className='nav-icons text-3xl'
          size='1.5rem'
        />
      }
      
      {/* Menu links */}
      <AnimatePresence>
        {
          isOpen && 
            <motion.div
              id='menu-links'
              className='flex flex-col absolute mt-7 border-2 dark:border-none bg-white dark:bg-black rounded-lg p-4'
              initial={{opacity: 0, y: -10}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.2}}
            >
              {routes.map((route, index) => (
                <Navlink key={index} route={route}/>
              ))}
            </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}