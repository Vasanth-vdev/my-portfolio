import './App.css'
import AboutPage from './pages/AboutPage'
import {Routes,Route} from 'react-router-dom'
import SkillsPage from './pages/SkillsPage'
import Layout from './pages/layout'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<AboutPage />} />
      <Route path='/skills' element={<SkillsPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
