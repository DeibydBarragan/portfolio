import { Link } from 'react-scroll'
import { Route } from './interfaces'

type Props = {
  route: Route
}

export default function Navlink({route}: Props) {
  return (
    <Link
      className='nav-link'
      to={route.path}
      smooth={true}
      duration={500}
      spy={true}
      activeClass='bg-gray-300 dark:bg-gray-600'
    >
      {route.name}
    </Link>
  )
}