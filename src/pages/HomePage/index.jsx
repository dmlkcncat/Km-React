import CCarousel from "./components/Carousel"
import Counter from "./components/Counter"
import ScrollToTop from "../../components/ScrollToTop"
import Slogan from "./components/Slogan"
import ServiceCard from "./components/ServiceCard"
import UserComments from "./components/UserComments"

const index = () => {
  return (
    <div>
      <CCarousel />
      <div className="mx-auto text-center p-5 bg-blue-100">
        <Counter />
      </div>
      <div className="text-center">
        <Slogan />
      </div>
      <div className="px-20 py-20 bg-[#fae8ff]">
        Projelerimiz
        <ServiceCard />
      </div>
      <div></div>
      {/* <div className="px-20">
        <ProductCard />
      </div> */}
      {/* <div className="p-5"></div> */}
      {/* <p className="text-center text-xl font-bold bg-slate-200 py-5">Hizmetlerimiz</p> */}
      {/* <div className="px-20 py-5 bg-slate-200">
        <ServiceCard />
      </div> */}
      {/* <p className="text-center text-3xl font-bold p-5">
        Süreçler
      </p> */}
      {/* <div className="divider"></div> */}
      {/* <div className="p-5"></div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Processes />
        </div>
      </div> */}
      <p className="text-center font-bold p-2">Bizimle İlgili Merak Edilenler</p>
      {/* <div className="px-20">
        <AAccordion />
      </div> */}
      <div>
        <UserComments />
      </div>
      <p className="text-center font-extrabold p-10">Referanslarımız</p>
      <div className="p-10"></div>
      <ScrollToTop />

    </div>
  )
}
export default index
