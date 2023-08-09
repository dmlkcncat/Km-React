import CCarousel from './Carousel'
import Counter from './Counter'

const Welcome = () => {
  return (
    <>
      <div
        style={{ height: 'calc(100vh - 80px)' }}
        className="flex flex-col sm:h-screen"
      >
        <div className="flex-1">
          <CCarousel />
        </div>
      </div>
      <div className="py-10">
        <Counter />
      </div>
    </>
  )
}

export default Welcome
