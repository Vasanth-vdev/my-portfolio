import React from 'react'
import {Cursor} from 'react-simple-typewriter'
import photo from '../assets/photo.jpg'
import {useTypewriter} from 'react-simple-typewriter'
import SkillsPage from './SkillsPage'

const AboutPage = () => {
  const [text] = useTypewriter({
    words : ['VASANTH','FULL STACK WEB DEVELOPER'],
    loop : {},
  })
  return (
    <>
    <div className='scrollBar'>
      <div className='description'>
        <div className='myname'>
          <p className='hello'>HI👋🏻,<br/>
          <span className='topHeading'>I'M</span> <span className='blue'>{text}</span>
          <span style={{color:'blue'}}><Cursor cursorStyle='⚡'/></span></p>
        </div>
        <div className='imageContainer'>
          <img loading='lazy'
          className='show' width={500} height={500} src={photo} />
        </div>
      </div>
      <div className='myPassion'>
        <p className='paragraph'>I am deeply passionate about full-stack web development because it allows me to bring my creative ideas
          to life in the digital realm. From designing elegant user interfaces to crafting robust server-side logic,
          I relish the challenge of building seamless and engaging web experiences.
          The ever-evolving nature of web technologies keeps me excited and driven
          to continuously learn and innovate in this dynamic field.</p>
      </div>
      <div className='resume-contact'>
          <button className='contactBtn'>Contact me</button>
          <button className='resumeBtn' download>My Resume</button>
        </div>
      <SkillsPage />
    </div>
    </>
  )
}

export default AboutPage
