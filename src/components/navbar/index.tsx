import React from 'react'
import brandLogo from '../../assets/images/brand-logo.svg'

const NavBar = () => {
  return (
    <nav className="flex min-h-[86px] bg-brand-green px-[72px] py-[30px]">
      <img src={brandLogo} />
    </nav>
  )
}

export default NavBar
