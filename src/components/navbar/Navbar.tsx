import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Navlink from './Navlink'
import { routes } from './navbar.data'
import DarkModeButton from './DarkModeButton'
import MenuLinks from './MenuLinks'
import { Link } from 'react-scroll'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='fixed inset-0'>
      <div className='flex p-3 justify-between bg-white/30 dark:bg-black/30 backdrop-blur-md 2xl:px-32'>
        <div className='flex gap-2 items-center'>
          {/* Menu links */}
          <MenuLinks routes={routes}/>
          {/* Social media links */}

          <Link
            className='rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 font-semibold transition ease-in-out duration-200 hover:cursor-pointer'
            to='body'
            smooth={true}
            duration={200}
          >
            Deibyd Barragán
          </Link>
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
          <i className='AiFillAlert'/>
          <DarkModeButton/>
        </div>
      </div>
    </nav>
  )
}