import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from 'react'

const MainLayout = () => {
  const [navbarVisibility, setNavbarVisibility] = useState(true)

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        {navbarVisibility && <Navbar />}
        <div className="flex-1 bg-white">
          <Outlet context={{ setNavbarVisibility, navbarVisibility }} />
        </div>

        <Footer />
      </div>
    </>
  )
}

MainLayout.Navbar = Navbar

export default MainLayout
