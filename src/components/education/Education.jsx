import React from 'react'

import './education.css'
import {FaSchool} from 'react-icons/fa'
import {GiWhiteBook} from 'react-icons/gi'
import {FaBookReader} from 'react-icons/fa'
import {BsCalendarCheck} from 'react-icons/bs'

function Education() {
  return (
    <section id='education'>
    <h2>My Education</h2>
    <div className="container education__container">
      <article  className='education'>
        <div className="education__head">
          <h3>Graduation</h3>
        </div>
        <div className="education__details">
          <FaSchool className='icon-large'/>
          <h4>Bundelkhand Institute of Engineering & Technology, Jhansi</h4>
        </div>
        <div className="education__details">
          <GiWhiteBook/>
          <h4>Electronics & Communication Engg</h4>
        </div>
        <div className="education__details">
          <FaBookReader/>
          <h4>7.4/10</h4>
        </div>
        <div className="education__details">
          <BsCalendarCheck/>
          <h4>Augut 2018 - May 2022</h4>
        </div>
      </article>
      <article  className='education'>
        <div className="education__head">
          <h3>Intermediate</h3>
        </div>
        <div className="education__details">
          <FaSchool/>
          <h4>Shri Shankar Inter College</h4>
        </div>
        <div className="education__details">
          <GiWhiteBook/>
          <h4>PCM</h4>
        </div>
        <div className="education__details">
          <FaBookReader/>
          <h4>79.2%</h4>
        </div>
        <div className="education__details">
          <BsCalendarCheck/>
          <h4>2015</h4>
        </div>
      </article>
      <article  className='education'>
        <div className="education__head">
          <h3>Highschool</h3>
        </div>
        <div className="education__details">
          <FaSchool/>
          <h4>Haji MD Yusuf HS School</h4>
        </div>
        <div className="education__details">
          <FaBookReader/>
          <h4>77.6%</h4>
        </div>
        <div className="education__details">
          <BsCalendarCheck/>
          <h4>2013</h4>
        </div>
      </article>
    </div>

    </section>
  )
}

export default Education