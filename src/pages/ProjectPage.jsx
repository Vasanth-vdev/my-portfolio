import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ProjectPage = () => {
  useEffect(() => {
    Aos.init({duration : 2000})
  },[])
  return (
    <div id='ProjectPage' className='projectPage'>
    <div>
    <h1 className='my-project' data-aos='fade-right'>My Projects</h1>
    </div>
    <div className='project-container'>
    </div>
    </div>
  )
}

export default ProjectPage
