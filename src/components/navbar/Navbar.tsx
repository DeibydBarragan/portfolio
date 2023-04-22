import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Navlink from './Navlink'
import { routes } from './navbar.data'
import DarkModeButton from './DarkModeButton'
import MenuLinks from './MenuLinks'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='p-4 sticky'>
      <nav className='flex p-3 justify-between rounded-xl bg-white dark:bg-black'>
        <div className='flex gap-2 items-center'>
          {/* Menu links */}
          <MenuLinks routes={routes}/>
          {/* Social media links */}
          <Navlink route={
            {
              name: 'Deibyd Barragan',
              path: 'home'
            }
          }/>
          <a href='https://github.com/DeibydBarragan' target='_blank'>
            <BsGithub className='nav-icons'/>
          </a>
          <a href='https://www.linkedin.com/in/deibyd-barragan-68b59018b/' target='_blank'>
            <BsLinkedin className='nav-icons'/>
          </a>
        </div>
        {/* Navigation links */}
        <div className='hidden md:flex md:gap-5 gap-10'>
          {routes.map((route, index) => (
            <Navlink key={index} route={route}/>  
          ))}
        </div>
        {/* Theme switcher */}
        <div className='flex gap-2 mr-2'>
          <DarkModeButton/>
        </div>
      </nav>
    </div>
  )
}