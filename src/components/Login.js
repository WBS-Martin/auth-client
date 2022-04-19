import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [userInput, setUserInput] = useState({ name: '', password: '' })
  const { login, loggedIn } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    login(userInput)
  }

  if (loggedIn) return <Navigate to='/user' />

  return (
    <div>
      <h1>Login</h1>
      <form method='POST'>
        <input
          type='text'
          name='name'
          onChange={(e) =>
            setUserInput({
              name: e.target.value,
              password: userInput.password,
            })
          }
        />
        <input
          type='password'
          name='password'
          onChange={(e) =>
            setUserInput({ name: userInput.name, password: e.target.value })
          }
        />
        <button onClick={handleLogin}>login</button>
      </form>
    </div>
  )
}

export default Login
