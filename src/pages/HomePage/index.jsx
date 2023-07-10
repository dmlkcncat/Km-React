import CCarousel from "./components/Carousel"
import Counter from "./components/Counter"
import ScrollToTop from "../../components/ScrollToTop"
import Slogan from "./components/Slogan"
import ServiceCard from "./components/ServiceCard"
import Processes from "./components/Processes"
import UserComments from "./components/UserComments"
import SocialMedia from "./components/SocialMedia"

const index = () => {
  return (
    <div>
      <div>
        <CCarousel />
      </div>
      <div className="mx-auto text-center bg-white p-3">
        <Counter />
      </div>
      <div className="text-center">
        <Slogan />
      </div>
      <div className="p-5 bg-slate-100"></div>
      <div>
        <ServiceCard />
      </div>
      <div className="p-5 bg-slate-100"></div>
      <div className="p-10">
        <Processes />
      </div>
      <div>
        <UserComments />
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
