import React from 'react'
import "./contact.css" 
import {BsWhatsapp} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'
import {SiGeeksforgeeks} from 'react-icons/si'

function Contact() {
  return (
    <section id='contact'>
    <h2>Contact Me</h2>
      <div className="container contact__container"> 
        <div className="contact__info">
          <h2>Personal</h2>
          <div className="contact__details">
            <div className="contact__personal">
            <a href="https://api.whatsapp.com/send/?phone=919005573700&text&app_absent=0" target="_"><BsWhatsapp/></a>
            <p>+919005573700</p>
            </div>
            <div className="contact__personal">
            <a href=""><BsFillTelephoneFill/></a>
            <p>+919005573700</p>
            </div>
            <div className="contact__personal">
            <a href="mailto:ermohdsharif@gmail.com"  ><AiOutlineMail/></a>
            <p>ermohdsharif@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact__info">
          <h2>Profiles</h2>
          <div className="contact__profiles">
          <a href="https://linkedin.com/in/shaarifg" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/shaarifg" target="_blank"><BsGithub/></a>
        <a href="https://www.hackerrank.com/shaarifg" target="_blank"><FaHackerrank/></a>
        <a href="https://auth.geeksforgeeks.org/user/shaarifg/" target="_blank"><SiGeeksforgeeks/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact