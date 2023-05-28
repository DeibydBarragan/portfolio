import { Link } from 'react-scroll'
import { Route } from './interfaces'
import { motion } from 'framer-motion';

type Props = {
  route: Route
  index?: number
}

export default function Navlink({route, index}: Props) {
  return (
    <Link
      className='nav-link'
      to={route.path}
      smooth={true}
      duration={500}
      spy={true}
      activeClass='bg-white dark:bg-gray-600 dark:text-white border dark:border-none'
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
          delay: index ? index * 0.2 : 0.1
        }}
      >
        {route.name}  
      </motion.span>
    </Link>
  )
}