import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string
  id?: string
  children: React.ReactNode
}

export default function Section({className, id, children}: Props) {
  const containerClasses = classNames(
    "relative overflow-x-hidden sm:overflow-visible w-full p-5 sm:p-0 pt-20 md:pt-0 flex flex-col gap-3 justify-center sm:min-h-screen mx-auto z-10",
    className
  )

  return (
    <section
      className={containerClasses}
      id={id}
    >
      {children}
    </section>
  )
}