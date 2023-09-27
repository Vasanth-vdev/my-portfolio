import './App.css'
import AboutPage from './pages/AboutPage'
import {Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Routes>
      <Route index element={<AboutPage />} />
    </Routes>
    </>
  )
}

export default App
