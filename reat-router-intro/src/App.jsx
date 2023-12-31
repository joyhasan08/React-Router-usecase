import { useState } from 'react'

import './App.css'
import NavBar from './component/Navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
