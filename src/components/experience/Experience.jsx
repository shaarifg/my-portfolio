import React from 'react'
import "./experience.css"
import {FaReact} from 'react-icons/fa'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaJava} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
function Experience() {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Skills</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
      <h3>Frontend Developent</h3>
      <div className="experience__content">
       <article className='experience__details'>
        <FaReact className='experience__details-icon'/>
        <div>
        <h4>ReactJs</h4>
        <small className='text-light'>Advanced</small>
        </div>
        </article>
        <article className='experience__details'>
        <ImHtmlFive className='experience__details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Advanced</small>
        </div>
        </article>
        <article className='experience__details'>
        <SiCss3 className='experience__details-icon'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Advanced</small>
        </div>
        </article>
        <article className='experience__details'>
        <BsBootstrapFill className='experience__details-icon'/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>  
      </div>
      </div>
      {/* END OF FRONTEND */}

      <div className="experience__backend">
      <h3>Programming Languages</h3>
      <div className="experience__content">
        <article className='experience__details'>
        <FaJava className='experience__details-icon'/>
        <div>
        <h4>Core JAVA</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'>
        <SiJavascript className='experience__details-icon'/>
        <div>
        <h4>JavaScript(ES6)</h4>
        <small className='text-light'>Basic(Frontend Level)</small>
        </div>
        </article>
      </div>
      </div>
      <div className="experience__backend">
      <h3>Others</h3>
      <div className="experience__content">
        <article className='experience__details'>
        <div>
        <h4>Tools</h4>
        <small className='text-light'>VS Code, IntelliJ IDEA</small>
        </div>
        </article>
        <article className='experience__details'>
        <div>
        <h4>Languages</h4>
        <small className='text-light'>English & Hindi</small>
        </div>
        </article>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Experience