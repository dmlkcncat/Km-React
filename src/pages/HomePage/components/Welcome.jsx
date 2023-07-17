import CCarousel from "./Carousel"
import Counter from "./Counter"

const Welcome = () => {
  return <div style={{ height: 'calc(100vh - 80px)' }} className="flex flex-col">
    <div className="flex-1">
      <CCarousel />
    </div>
    <Counter />
  </div>
}

export default Welcome