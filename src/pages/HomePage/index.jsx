import CCarousel from "./components/Carousel"
import ContactCard from "./components/ContactCard"
import ProductCard from "./components/ProductCard"
import ServiceCard from "./components/ServiceCard"
import AAccordion from "./components/Accordion"
import Processes from "./components/Processes"
import Counter from "./components/Counter"
import AnimatedCounter from "./components/AnimatedCounter"

const index = () => {
  return (
    <div>
      <CCarousel />
      <div className="mx-auto text-center p-5">
        <Counter />
      </div>
      <div className="px-20 py-5 p-3">
        {/* <p className="text-center text-xl font-bold py-4 colorful-text-animation font-mono">
          Sizi Arayalım
        </p> */}
        {/* <ContactCard /> */}
      </div>
      <div className="px-20">
        <ProductCard />
      </div>
      <div className="p-5"></div>
      <p className="text-center text-xl font-bold bg-slate-200 py-5">Hizmetlerimiz</p>
      <div className="px-20 py-5 bg-slate-200">
        <ServiceCard />
      </div>
      <p className="text-center text-3xl font-bold p-5">
        Süreçler
      </p>
      {/* <div className="divider"></div> */}
      <div className="p-5"></div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Processes />
        </div>
      </div>
      <p className="text-center font-bold p-2">SSS</p>
      <div className="px-20">
        <AAccordion />
      </div>
      <div className="p-10"></div>
    </div>
  )
}
export default index
