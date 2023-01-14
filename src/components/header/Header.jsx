import React from 'react'

import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import ME from '../../MyPics/main.png'


function Header() {
  return (
    <header >
      <div className="container header__container">
      <h5>Hi there, I am</h5>
      <h1>Mohammad Sharif</h1>
      <h5 className="text-light">Frontend developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="MyPhotoIsHere" />
        </div>
        <a href="#conatct" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header