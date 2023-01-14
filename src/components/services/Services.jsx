import React from 'react'
import "./services.css"
import {BsCheck} from 'react-icons/bs'

function Services() {
  return (
    <section id='services'>
    <h5>Some of My Latest Projects</h5>
    <h2>Projects</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Amazon Clone</h3>
        </div>
        <div className="project__details">
          <h4>Description</h4>
          <p>Developed fully responsive ReactJs and Firebase based Amazon clone with Sign In, Sign Out and Add to Cart functionality.</p>
          <h4>Technologies Used</h4>
          <p>ReactJs, HTML, CSS, Firebase, Material UI</p>
          <h4>Project Links</h4>
          <a className='btn'  href="https://clone-1b780.web.app/" target='_'>Live Website</a>
          <a className='btn'  href="" type='button'>Github Link</a>
        </div>  
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Twitter Clone</h3>
        </div>
        <div className="project__details">
          <h4>Description</h4>
          <p>Developed fully responsive ReactJs and Firebase based Twitter clone.</p>
          <h4>Technologies Used</h4>
          <p>ReactJs, HTML, CSS, Firebase, Material UI</p>
          <h4>Project Links</h4>
          <a className='btn'  href="https://twitter-clone-sharif.web.app/" target="_">Live Website</a>
          <a className='btn'  href="" target='_'>Github Link</a>
        </div>  
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Bug Tracking System</h3>
        </div>
        <div className="project__details">
          <h4>Description</h4>
          <p>A Java Project with Database Connectivity that focuses on the concepts of OOP, this project has Admin Panel and three other modules.</p>
          <h4>Technologies Used</h4>
          <p>Core Java, MySQL</p>
          <h4>Project Links</h4>
          <a className='btn' href="" target="_" >Live Website</a>
          <a className='btn'  href="" target="_" >Github Link</a>
        </div>  
      </article>
    </div>
    </section>
  )
}

export default Services