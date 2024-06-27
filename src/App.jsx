import { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
 
  const [loading , setLoading] = useState(true)
  const dipatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=> {
      if (userData) {
       dipatch(login({userData}))
      } else {
       dipatch(logout())
      }
    })
    .finally(() => setLoading(false))
  
  }, [])
  

 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
       TODO:  <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
 ) : null
}

export default App
