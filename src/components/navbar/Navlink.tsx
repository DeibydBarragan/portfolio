import { Link } from 'react-scroll'
import { Route } from './interfaces'
import { motion } from 'framer-motion';

type Props = {
  route: Route
  index: number
}

export default function Navlink({route, index}: Props) {
  return (
    <Link
      className='nav-link'
      to={route.path}
      smooth={true}
      duration={500}
      spy={true}
      activeClass='bg-white dark:bg-gray-600 dark:text-white'
    >
      <motion.span
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.4 * index
        }}
      >
        {route.name}  
      </motion.span>
    </Link>
  )
}