import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginForm } from './components/LoginForm/LoginForm'
import { Home } from './components/Home'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
