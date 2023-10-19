import React, { ReactElement } from 'react'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
