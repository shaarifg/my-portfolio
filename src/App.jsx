import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experirence from "./components/experience/Experience"
import Services from './components/services/Services'
// import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'
import Education from './components/education/Education'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Education/>
      <Experirence/>
      <Services/>
      <Contact/>
      {/* <Portfolio/> */}
      
      {/* <Footer/> */}
    </>
  )
}

export default App