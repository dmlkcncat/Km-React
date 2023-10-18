import ScrollToTop from '../../components/ScrollToTop'
import Slogan from './components/Slogan'
import ServiceCard from './components/ServiceCard'
import Processes from './components/Processes'
import UserComments from './components/UserComments'
import References from './components/References'
import Welcome from './components/Welcome'
import { useOutletContext } from 'react-router-dom'
import SteelStructure from './components/AfterBefore/SteelStructure'

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
      <div className="px-20 bg-[#f0f5ff]">
        <SteelStructure />
      </div>
      {/* <div className="p-10"></div> */}
      {/* <div className="px-20 bg-[#f2f2f2] py-10">
        <PrefabricatedBuilding />
      </div> */}
      <div>
        <ServiceCard />
      </div>
      <div>
        <References />
      </div>
      <UserComments />
      <Processes />
      {/* <div className="p-3 bg-[#f2f2f2]"></div> */}
      {/* <div className="px-20 py-6 bg-[#e2e2e2]">
        <UserCommentList />
      </div> */}
      {/* <div className="bg-[#e2e2e2]">
        <SSS />
      </div> */}

      {/* <div className="z-0 ">
        <SocialMedia />
      </div> */}
      <ScrollToTop />
    </div>
  )
}
export default index
