import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../MyPics/main.png'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
        <p>Hello,<br />I am Mohd Sharif a Web Developer with great interest in front-end development. <br />Visit Skills section to know more.</p>
          <div className="about__cards">
            <a href="#education"><article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>Currenty studying in final semester of B.Tech.</small>
            </article></a>
            <a href="#experience">
            <article className='about__card'>
            <GiSkills className='about__icon'/>
              <h5>Skills</h5>
              <small>Click for the details</small>
            </article>
            </a>
            <a href="#services">
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Click for the details</small>
            </article>
            </a>
          </div>
          
          <a href="#contact" className='btn btn-primary'>Let's connect</a>
        </div>
      </div>
    </section>
  )
}

export default About