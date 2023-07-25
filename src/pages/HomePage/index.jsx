import ScrollToTop from '../../components/ScrollToTop'
import Slogan from './components/Slogan'
import ServiceCard from './components/ServiceCard'
import Processes from './components/Processes'
import UserComments from './components/UserComments'
import SocialMedia from './components/SocialMedia'
import SSS from './components/SSS'
import Welcome from './components/Welcome'
import { useOutletContext } from 'react-router-dom'
import { Button } from 'flowbite-react'
import SteelStructure from './components/AfterBefore/SteelStructure'
import PrefabricatedBuilding from './components/AfterBefore/PrefabricatedBuilding'

const index = () => {
  const { setNavbarVisibility, navbarVisibility } = useOutletContext()

  return (
    <div>
      <Welcome
        setNavbarVisibility={setNavbarVisibility}
        navbarVisibility={navbarVisibility}
      />
      <div className="text-center bg-[#f2f2f2]">
        <Slogan />
      </div>
      <div className="px-20 bg-[#364e63] py-10">
        <SteelStructure />
      </div>
      {/* <div className="p-10"></div> */}
      <div className="px-20 bg-[#f2f2f2] py-10">
        <PrefabricatedBuilding />
      </div>
      <div>
        <ServiceCard />
      </div>
      <Processes />
      <div className="p-5 bg-sky-100"></div>
      <UserComments />
      <div className="sss-bg-color">
        <SSS />
      </div>
      <div className="p-5 sss-bg-color"></div>
      <div className="z-0">
        <SocialMedia />
      </div>
      {/* <p className="text-center font-extrabold p-10">Referanslarımız</p> */}
      <ScrollToTop />
    </div>
  )
}
export default index
