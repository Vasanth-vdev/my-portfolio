import React, { useState } from 'react'
import {Cursor} from 'react-simple-typewriter'
import photo from '../assets/photo.jpg'
import {useTypewriter} from 'react-simple-typewriter'

const AboutPage = () => {
  const [activeTab,setActiveTab] = useState('about')
    const [text] = useTypewriter({
        words : ['VASANTH','FULL STACK WEB DEVELOPER'],
        loop : {},
      })
      const handleTab = (tabName) => {
        setActiveTab(tabName)
      }
  return (
    <div>
      <div className='header'>
          <li className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTab('about')}>About</li>
          <li className={activeTab === 'skills' ? 'active' : ''}
          onClick={() => handleTab('skills')}>Skills</li>
          <li className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => handleTab('projects')}>Projects</li>
          <li className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => handleTab('contact')}>Contact</li>
      </div>
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
    </div>
  )
}

export default AboutPage
