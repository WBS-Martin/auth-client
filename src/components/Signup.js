import React, { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Signup = () => {
  const [userInput, setUserInput] = useState({ name: '', password: '' })
  const { loggedIn, signup } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    signup(userInput)
  }

  if (loggedIn) return <Navigate to='/user' />

  return (
    <div>
      <h1>Signup</h1>
      <form method='POST'>
        <input
          type='text'
          name='name'
          onChange={(e) =>
            setUserInput({ name: e.target.value, password: userInput.password })
          }
        />
        <input
          type='password'
          name='password'
          onChange={(e) =>
            setUserInput({ name: userInput.name, password: e.target.value })
          }
        />
        <button onClick={handleLogin}>signup</button>
      </form>
    </div>
  )
}

export default Signup
