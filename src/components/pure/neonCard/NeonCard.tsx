import React from 'react';

type Props = {
  color: string,
  description: string,
  children: React.ReactNode
}

export default function NeonCard({color, description, children}: Props) {
  return (
    <div className={`flex border-2 border-${color}-500 items-center justify-center gap-2 p-3 rounded-xl`}>
      {description}
      <div className={`text-${color}-500 text-2xl`}>
        {children}
      </div>
    </div>
  )
}