import ScrollToTop from '../../components/ScrollToTop'
import Slogan from './components/Slogan'
import ServiceCard from './components/ServiceCard'
import Processes from './components/Processes'
import UserComments from './components/UserComments'
import SocialMedia from './components/SocialMedia'
import SSS from './components/SSS'
import Welcome from './components/Welcome'
import { Link, useOutletContext } from 'react-router-dom'
import { Button } from 'flowbite-react'

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
      <div className="p-5 bg-white"></div>
      <div>
        <ServiceCard />
      </div>
      <div className="p-2 bg-white">
        <Button
          gradientDuoTone="greenToBlue"
          outline
          className="items-center mx-auto text-teal-900"
        >
          <Link href="/urunler">Tüm Projeleri Görüntüle</Link>
        </Button>
      </div>
      <div className="p-5"></div>
      <Processes />
      <div className="p-5"></div>
      <UserComments />
      <div>
        <SSS />
      </div>
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
