import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

const AuthState = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')

    const verifySession = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8000/auth/verify-session',
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        if (res.data.success) {
          const userInfo = await axios.get('http://localhost:8000/auth/me', {
            headers: {
              Authorization: `${token}`,
            },
          })
          setLoggedIn(true)
          setUser(userInfo.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    token && verifySession()
  }, [])

  const login = async (user) => {
    try {
      const res = await axios.post('http://localhost:8000/auth/login', user)
      localStorage.setItem('token', res.data.token)

      const userInfo = await axios.get('http://localhost:8000/auth/me', {
        headers: {
          Authorization: `${res.data.token}`,
        },
      })

      setLoggedIn(true)
      setUser(userInfo.data)
    } catch (err) {
      console.log(err)
    }
  }

  const signup = async (user) => {
    try {
      const res = await axios.post('http://localhost:8000/auth/signup', user)
      localStorage.setItem('token', res.data.token)
      const userInfo = await axios.get('http://localhost:8000/auth/me', {
        headers: {
          Authorization: `${res.data.token}`,
        },
      })
      localStorage.setItem('token', res.data.token)
      setLoggedIn(true)
      setUser(userInfo.data)
    } catch (err) {
      console.log(err)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
    setUser({})
  }

  return (
    <AuthContext.Provider value={{ logout, loggedIn, user, signup, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
