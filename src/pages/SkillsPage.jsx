import React, { useEffect } from 'react'
import SkillsIcon from './skillsIcon'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SkillsPage = () => {
  useEffect(() => {
    Aos.init({duration : 2000})
  },[])
  return (
    <div className='skillsPage' id='SkillsPage'>
      <div className='skills'>
      <h1 className='myskills' data-aos = 'fade-left'>MY SKILLS</h1>
      </div>
    <SkillsIcon />
    </div>
  )
}

export default SkillsPage
