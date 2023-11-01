import React,{useEffect} from 'react'
import {Cursor} from 'react-simple-typewriter'
import photo from '../assets/monkey.jpg'
import {useTypewriter} from 'react-simple-typewriter'
import SkillsPage from './SkillsPage'
import ProjectPage from './ProjectPage'
import ContactPage from './contactPage'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutPage = () => {
  useEffect(() => {
    Aos.init({duration : 2000})
  },[])
  const [text] = useTypewriter({
    words : ['VASANTH','FULL STACK WEB DEVELOPER'],
    loop : {},
  })
  return (
    <>
    <div id='AboutPage' className='scrollBar'>
      <div className='description'>
        <div className='myname' >
          <p className='hello' data-aos="fade-right">HI👋🏻,<br/>
          <span className='topHeading'>I'M</span> <span className='blue'>{text}</span>
          <span style={{color:'blue'}}><Cursor cursorStyle='⚡'/></span></p>
        </div>
        <div className='imageContainer' data-aos = 'fade-left'>
          <img loading='lazy'
          className='show' width={500} height={500} src={photo} />
        </div>
      </div>
      <div className='myPassion' data-aos = 'fade-right'>
        <p className='paragraph'>I am deeply passionate about full-stack web development because it allows me to bring my creative ideas
          to life in the digital realm. From designing elegant user interfaces to crafting robust server-side logic,
          I relish the challenge of building seamless and engaging web experiences.
          The ever-evolving nature of web technologies keeps me excited and driven
          to continuously learn and innovate in this dynamic field.</p>
      </div>
      <div className='resume-contact'>
          <button className='contactBtn' data-aos="fade-right">Contact me</button>
          <a className='resumeBtn' download="myresume" href='./src/assets/resumepdf.pdf' data-aos="fade-left">My Resume</a>
        </div>
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
    </div>
    </>
  )
}

export default AboutPage
