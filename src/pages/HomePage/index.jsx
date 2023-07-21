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
      <div className="text-center bg-sky-100">
        <Slogan />
      </div>
      <div className="p-5 bg-sky-100"></div>
      <div className="bg-blue-100">
        <ServiceCard />
      </div>
      <div className="p-2 bg-blue-100">
        <Button
          gradientDuoTone="greenToBlue"
          outline
          className="items-center mx-auto text-teal-900"
        >
          <Link href="/urunler">Tüm Projeleri Görüntüle</Link>
        </Button>
      </div>
      <div className="p-5 bg-sky-100"></div>
      <Processes />
      <div className="p-5 bg-sky-100"></div>
      <UserComments />
      <div className="bg-teal-100">
        <SSS />
      </div>
      <div className="p-5 bg-teal-100"></div>
      <div className="z-0">
        <SocialMedia />
      </div>
      {/* <p className="text-center font-extrabold p-10">Referanslarımız</p> */}
      <ScrollToTop />
    </div>
  )
}
export default index
