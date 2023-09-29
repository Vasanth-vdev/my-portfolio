import { useState } from 'react'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

 const Layout = () => {
    const [activeTab,setActiveTab] = useState('about')
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
      <Outlet />
    </div>
  )
}

export default Layout
