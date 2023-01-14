import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/shaarifg" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/shaarifg" target="_blank"><BsGithub/></a>
        <a href="https://www.hackerrank.com/shaarifg" target="_blank"><FaHackerrank/></a>
        <a href="https://auth.geeksforgeeks.org/user/shaarifg/" target="_blank"><SiGeeksforgeeks/></a>

    </div>
  )
}

export default HeaderSocials;