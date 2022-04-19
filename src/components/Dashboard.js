import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {
  const { loggedIn, user } = useContext(AuthContext)

  if (!loggedIn) return <Navigate to='/login' />
  return (
    <div>
      <h1>User Route</h1>
      <p>Name: {user.name}</p>
      <p>Admin: {user.admin ? 'true' : 'false'}</p>
    </div>
  )
}

export default Dashboard
