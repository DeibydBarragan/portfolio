import { cardData } from './interfaces';

export default function NeonCard({borderColor = null, shadowColor = null, textColor = null, icon = null, description, children = null}: cardData) {

  return (
    <div className='flex bg-white/90 dark:bg-gray-950/70 backdrop-blur-xl shadow-sm rounded-md items-center justify-center gap-2 p-3'>
      {description}
      <div className={`${textColor} text-2xl`}>
        {children}
        {icon}
      </div>
    </div>
  )
}