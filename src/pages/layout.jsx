import { useState } from 'react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

 const Layout = () => {
    const [activeTab,setActiveTab] = useState('about')
      const handleTab = (tabName) => {
        setActiveTab(tabName)
      }
  return (
    <div className='root'>
      <div className='header'>
          <li className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTab('about')}><a href='#AboutPage'>About</a></li>
          <li className={activeTab === 'skills' ? 'active' : ''}
          onClick={() => handleTab('skills')}><a href='#SkillsPage'>Skills</a></li>
          <li className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => handleTab('projects')}><a href='#ProjectPage'>Projects</a></li>
          <li className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => handleTab('contact')}><a href='#ContactPage'>Contact</a></li>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
