import { Fragment, useState } from 'react'
import { Route } from './interfaces'
import Navlink from './Navlink'
import { HiOutlineMenu } from 'react-icons/hi'
import { HiOutlineX } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Transition } from '@headlessui/react'

type Props = {
  routes: Route[]
}

export default function MenuLinks({routes}: Props) {

  const [isOpen, setOpen] = useState(false)

  return (
    <Menu as="div" className="relative md:hidden pt-2">
      <Menu.Button
        onClick={()=>setOpen(!isOpen)}
        aria-label='Botón de menú	'  
      >
        {isOpen ?
          <HiOutlineX className='nav-icons'/>
          : <HiOutlineMenu className='nav-icons'/>
        }
      </Menu.Button>
      <Transition
        as={Fragment}
        appear={true}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-80 translate-y-[-1rem]"
        enterTo="transform opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-80 translate-y-[-1rem]"
      >
        <Menu.Items
          as="div"
          className='flex flex-col absolute rounded-lg p-4 bg-white border dark:bg-black border-indigo-900'
        >
          {routes.map((route, index) => (
            <Navlink index={index} key={index} route={route}/>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}