import { useContext, useEffect, useRef, useState } from 'react'
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
  const menu = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const onClosingMenu = (event: MouseEvent) => {
      if(menu.current && !menu.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if(isMounted) {
      if(isOpen) {
        document.addEventListener('mousedown', onClosingMenu)
      } else {
        document.removeEventListener('mousedown', onClosingMenu)
      }
    }
  }, [isOpen, isMounted, setIsOpen])

  return (
    <div className='relative md:hidden'>
      {
        isOpen ? 
        <HiOutlineX
          onClick={() => setIsOpen(false)}
          className='nav-icons active:scale-90 transition ease-in-out duration-200'
          size='1.5rem'
        /> :
        <HiOutlineMenu
          onClick={() => setIsOpen(true)}
          className='nav-icons text-3xl active:scale-90 transition ease-in-out duration-200'
          size='1.5rem'
        />
      }
      
      {/* Menu links */}
      <AnimatePresence>
        {
          isOpen && 
            <motion.div
              ref={menu}
              className='flex flex-col absolute mt-7 rounded-lg p-4 bg-white border dark:bg-black border-indigo-900'
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