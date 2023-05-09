import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col p-4 gap-10">
        {children}
      </div>
      <Footer/>
    </>
  )
}