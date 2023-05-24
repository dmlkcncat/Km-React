import CCarousel from "./components/Carousel"
import ContactCard from "./components/ContactCard"
import ProductCard from "./components/ProductCard"
import ServiceCard from "./components/ServiceCard"
import AAccordion from "./components/Accordion"

const index = () => {
  return (
    <>
      <CCarousel />
      <div className="px-20 py-5 p-3">
        <ContactCard />
      </div>
      <div className="px-20">
        <ProductCard />
      </div>
      <div className="px-20">
        <p className="text-center text-xl font-bold py-4">Hizmetlerimiz</p>
        <ServiceCard />
      </div>
      <p className="text-center font-bold p-2">SSS</p>
      <div className="px-20">
        <AAccordion />
      </div>
    </>
  )
}
export default index
