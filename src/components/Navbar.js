import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { loggedIn, logout, user } = useContext(AuthContext)

  return (
    <nav className='Navbar'>
      <div>
        <ul>
          <li>
            <Link to='/'>All Students</Link>
          </li>
          <li>
            <Link to='/user'>User Route</Link>
          </li>
          {user.admin && (
            <li>
              <Link to='/admin '>Admin Route</Link>
            </li>
          )}
        </ul>
      </div>
      <div>
        {loggedIn ? (
          <>
            {user.name}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button>
              <Link to='/login'>Login</Link>
            </button>
            <button>
              <Link to='/signup'>Signup</Link>
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
