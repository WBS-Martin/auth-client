import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Students from './components/Students'
import Dashboard from './components/Dashboard'
import Admindashboard from './components/Admindashboard'
import Login from './components/Login'
import Signup from './components/Signup'
import AuthState from './context/AuthContext'
import NotFound from './components/404'

function App() {
  return (
    <div className='App'>
      <AuthState>
        <Navbar />
        <Routes>
          <Route path='/' element={<Students />} />
          <Route path='/user' element={<Dashboard />} />
          <Route path='/admin' element={<Admindashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthState>
    </div>
  )
}

export default App
