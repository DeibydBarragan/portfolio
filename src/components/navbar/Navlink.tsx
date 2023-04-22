import { Link } from 'react-scroll'
import { Route } from './interfaces'

type Props = {
  route: Route
}

export default function Navlink({route}: Props) {
  return (
    <Link
      className='rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 font-semibold transition ease-in-out duration-200 hover:cursor-pointer'
      to={route.path}
      smooth={true}
      duration={500}
      spy={true}
      activeClass='text-black bg-gray-700'
    >
      {route.name}
    </Link>
  )
}