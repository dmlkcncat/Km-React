import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carousel = () => {
  const data = [
    {
      img: '/slider/karbilslider3.png',
    },
    {
      img: '/slider/karbilslider2.png',
    },
    {
      img: '/slider/karbilslider1.jpg',
    },
  ]

  return (
    <Swiper
      modules={[Autoplay]}
      navigation
      slidesPerView={1}
      autoplay={{
        delay: 4000,
      }}
      className="h-full"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item?.id}
          className="h-full"
        >
          <div className="w-full h-full bg-gray-800  grid place-items-center z-0 slider-font">
            <img
              src={item.img}
              className="absolute w-full h-full object-cover z-0 bg-blend-multiply"
            />
            <div className="">{item.content}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Carousel
