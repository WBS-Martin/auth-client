import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Admindashboard = () => {
  const { user } = useContext(AuthContext)
  if (!user.admin) return <Navigate to='/404' />

  return (
    <div>
      <h1>Admin Route</h1>
      <p>Crazy Secret!</p>
    </div>
  )
}

export default Admindashboard
