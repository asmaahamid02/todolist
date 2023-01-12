import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/LoginForm/LoginForm'
import { Home } from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path='/' element={<LoginForm />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
