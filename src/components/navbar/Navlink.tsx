import { Link } from 'react-scroll'
import { Route } from './interfaces'
import { motion } from 'framer-motion';
import { fadeIn, flyUp } from '@/animations/anim';

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
    >
      <motion.span
        transition={{delay: index ? 0.4 * index : 0}}
        {...flyUp}
        {...fadeIn}
      >
        {route.name}  
      </motion.span>
    </Link>
  )
}