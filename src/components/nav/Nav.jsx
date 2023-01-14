import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdContactMail} from 'react-icons/md'

function Nav() {
  const[ active, setActive ] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActive('#')} className={active ==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActive('#about')} className={active ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActive('#experience')} className={active ==='#experience' ? 'active' : ''}><GiSkills/></a>
      <a href="#services" onClick={()=>setActive('#services')} className={active ==='#services' ? 'active' : ''}><VscFolderLibrary/></a>
      <a href="#contact" onClick={()=>setActive('#contact')} className={active ==='#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav