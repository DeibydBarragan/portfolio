import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Navlink from './Navlink'
import { routes } from './navbar.data'
import DarkModeButton from './DarkModeButton'
import MenuLinks from './MenuLinks'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { fadeIn } from '@/animations/anim'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <motion.nav
      className='fixed inset-x-0 z-20'
      transition={{ delay: 0.2 }} 
      {...fadeIn} 
    >
      <div className='flex p-3 justify-between bg-gray-100/30 dark:bg-black/30 backdrop-blur-md 2xl:px-32 h-16'>
        <div className='flex gap-2 items-center'>
          {/* Menu links */}
          <MenuLinks routes={routes}/>
          {/* Social media links */}

          <Link
            className='nav-link hidden sm:block'
            to='body'
            smooth={true}
            duration={200}
          >
            Deibyd Barragán
          </Link>
          <a href='https://github.com/DeibydBarragan'
            target='_blank' 
            aria-label='Perfil de Github'
          >
            <BsGithub className='nav-icons'/>
          </a>
          <a 
            href='https://www.linkedin.com/in/deibyd-barragan-68b59018b/' 
            target='_blank' 
            aria-label='Perfil de LinkedIn'
          >
            <BsLinkedin className='nav-icons'/>
          </a>
        </div>
        {/* Navigation links */}
        <div className='hidden md:flex md:gap-5 gap-10'>
          {routes.map((route, index) => (
            <Navlink key={index} index={index} route={route}/>  
          ))}
        </div>
        {/* Theme switcher */}
        <div className='flex gap-3 mr-2'>
          <i className='AiFillAlert'/>
          <DarkModeButton/>
          <Link
            className='btn-primary'
            to='contact'
            smooth={true}
            duration={500}
          >
            Contáctame
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}