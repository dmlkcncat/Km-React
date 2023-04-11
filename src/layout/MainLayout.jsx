import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default MainLayout