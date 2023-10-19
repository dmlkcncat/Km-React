import ScrollToTop from '../../components/ScrollToTop'
import Slogan from './components/Slogan'
import ServiceCard from './components/ServiceCard'
import Processes from './components/Processes'
import References from './components/References'
import Welcome from './components/Welcome'
import { useOutletContext } from 'react-router-dom'

const index = () => {
  const { setNavbarVisibility, navbarVisibility } = useOutletContext()

  return (
    <div className="mb-5">
      <Welcome
        setNavbarVisibility={setNavbarVisibility}
        navbarVisibility={navbarVisibility}
      />
      <div className="text-center bg-[#f0f5ff]">
        <Slogan />
      </div>
      <div>
        <ServiceCard />
      </div>
      <div>
        <References />
      </div>
      <Processes />
      <ScrollToTop />
    </div>
  )
}
export default index
