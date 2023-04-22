import { useTheme } from 'next-themes';
import { HiMoon } from 'react-icons/hi';
import { HiSun } from 'react-icons/hi';

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <button 
      onClick={handleTheme}
    >
      {
        theme === 'dark' ?
        <HiSun className='nav-icons' size='1.7rem'/> :
        <HiMoon className='nav-icons' size='1.7rem'/>
      }
    </button>
  )
}