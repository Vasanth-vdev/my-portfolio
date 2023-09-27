import React from 'react'
import {Cursor} from 'react-simple-typewriter'
import photo from '../assets/photo.jpg'
import {useTypewriter} from 'react-simple-typewriter'

const AboutPage = () => {
    const [text] = useTypewriter({
        words : ['VASANTH','FULL STACK WEB DEVELOPER'],
        loop : {},
      })
  return (
    <div>
      <div className='header'>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
      </div>
      <div className='description'>
        <div className='myname'>
          <p className='hello'>HI👋🏻,<br/>
          <span className='topHeading'>I'M</span> <span className='blue'>{text}</span>
          <span style={{color:'blue'}}><Cursor cursorStyle='⚡'/></span></p>
        </div>
        <div className='imageContainer'>
          <img loading='lazy' width={500} height={500} src={photo} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
