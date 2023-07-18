import ScrollToTop from '../../components/ScrollToTop'
import Slogan from './components/Slogan'
import ServiceCard from './components/ServiceCard'
import Processes from './components/Processes'
import UserComments from './components/UserComments'
import SocialMedia from './components/SocialMedia'
import SSS from './components/SSS'
import Welcome from './components/Welcome'
import { useOutletContext } from 'react-router-dom'

const index = () => {
  const { setNavbarVisibility, navbarVisibility } = useOutletContext()

  return (
    <div>
      <Welcome
        setNavbarVisibility={setNavbarVisibility}
        navbarVisibility={navbarVisibility}
      />
      <div className="text-center">
        <Slogan />
      </div>
      <div className="p-5 bg-slate-100"></div>
      <div>
        <ServiceCard />
      </div>
      <Processes />
      <div>
        <SSS />
      </div>
      <UserComments />
      <div className="z-0">
        <SocialMedia />
      </div>
      {/* <p className="text-center font-extrabold p-10">Referanslarımız</p> */}
      <div className="p-10"></div>
      <ScrollToTop />
    </div>
  )
}
export default index
