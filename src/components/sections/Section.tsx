import classNames from 'classnames'
import React from 'react'
import { motion } from 'framer-motion';

type Props = {
  className?: string
  id?: string
  children: React.ReactNode,
  initial?: object,
  whileInView?: object,
  transition?: object
}

export default function Section({className, id, children, initial, whileInView, transition}: Props) {
  const containerClasses = classNames(
    "relative overflow-x-hidden sm:overflow-visible w-full p-5 sm:p-0 pt-20 md:pt-0 flex flex-col gap-3 justify-center min-h-screen mx-auto z-10",
    className
  )

  return (
    <motion.section
      className={containerClasses}
      id={id}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      {children}
    </motion.section>
  )
}