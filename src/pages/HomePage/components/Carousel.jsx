import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carousel = () => {
  const data = [
    {
      img: '/slider/10.jpg',
      content: 'ENDÜSTRİYEL TESİS KURULUMU',
      description: 'İşinizin Temelini Kuruyoruz, Endüstriyel Başarıya Adım Adım..',
    },
    {
      img: '/slider/9.png',
      content: 'ÇELİK KONSTRÜKSİYON',
      description: 'Çelik Gücüyle Geleceği İnşa Ediyoruz..',
    },
    {
      img: '/slider/1.png',
      content: 'MAKİNE & EKİPMAN MONTAJI',
      description: 'Teknolojiyi Hareket Ettiriyoruz, Geleceği Birleştiriyoruz..',
    },
    {
      img: '/slider/8.jpg',
      content: 'BORULAMA & TESİSAT & HAVALANDIRMA',
      description: 'İşlevsellikten Estetiğe, Profesyonel Çözümler Sunuyoruz..',
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
          <div
            className="relative w-full h-full bg-gray-800  grid place-items-center z-0 slider-font"
            style={{ position: 'relative' }}
          >
            <img
              src={item.img}
              alt="Slider Image"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
                opacity: 0.6,
              }}
              className="absolute w-full h-full object-cover z-0 bg-blend-multiply"
            />
            <span className="z-10 text-white text-2xl font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {item.content}
              <span className="py-4 flex text-center justify-center items-center">
                {item.description}
              </span>
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Carousel
