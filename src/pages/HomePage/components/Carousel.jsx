import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carousel = () => {
  const data = [
    {
      img: '/slider/indir.jpeg',
      content: (
        <>
          <h1 className="mb-2 my-auto text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
            GELECEK NESİLLERE YAŞANILABİLİR ALANLAR İNŞAA EDİYORUZ..
          </h1>
          <p className="mb-8 my-auto text-xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 p-1">
            Konfor ve Huzurun adresi '' KARBİL YAPI '' ...
          </p>
        </>
      ),
    },
    {
      img: '/slider/indir1.jpg',
      content: (
        <>
          <h2 className="mb-2 text-2xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
            İSTER ANAHTAR TESLİM, İSTER İLERİ KABA TÜRKİYENİN HER YERİNE HİZMET VERMEKTEYİZ..
          </h2>
          <p className="mb-8 text-xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Sevkiyattan teslimata KARBİL YAPI yanınızda ....
          </p>
        </>
      ),
    },
    {
      img: '/slider/indir2.jpg',
      content: (
        <>
          <h1 className="mb-2 text-2xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
            KONFOR VE ŞIKLIĞI BİR ARADA BULABİLECEĞİNİZ MODERN YAPILARLA HİZMETİNİZDEYİZ...
          </h1>
          <p className="mb-8 text-xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Bir evden daha fazlası...
          </p>
        </>
      ),
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
          <div className="w-full h-full bg-gray-600 relative grid place-items-center z-0 slider-font">
            <img
              src={item.img}
              className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50 bg-blend-multiply"
            />
            <div className="z-10 mx-auto max-w-screen-xl text-center slider-font">
              {item.content}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Carousel
