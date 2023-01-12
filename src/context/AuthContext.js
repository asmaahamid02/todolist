import { createContext, useState, useEffect, useContext } from 'react'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { isAuthenticated } from '../services/AuthService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      let currentUser = isAuthenticated()
      if (!currentUser) {
        localStorage.removeItem('user')
      }
      setAuthUser(currentUser)
    }

    checkAuth()
  }, [])

  return (
<AuthContext.Provider value={[authUser, setAuthUser]}>
    {authUser ? children : <LoginForm />}
</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
