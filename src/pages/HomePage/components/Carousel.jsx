import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import Counter from "../../../components/Counter"

const CCarousel = () => {
  // .custom-container {
  //   height: 75vh; /* Ekran yüksekliğinin 3/4'ü */
  //   max-height: 100vh; /* Maksimum yükseklik ekran yüksekliği kadar */
  // }

  return (
    <>
      <div className="relative w-full z-0">
        <Swiper
          modules={[Autoplay]}
          navigation
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 4000,
          }}
          style={{ height: "60vh", maxHeight: "60vh" }}
        >
          <SwiperSlide>
            <div className="bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?w=1380&t=st=1686819142~exp=1686819742~hmac=dfda627fc8b25afd182b5508a3c33741d673565abc6e069aa7868cc84913d083')] bg-gray-500 bg-blend-multiply">
              <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 my-auto">
                <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                  GELECEK NESİLLERE YAŞANILABİLİR ALANLAR İNŞAA EDİYORUZ..
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 p-1">
                  Konfor ve Huzurun adresi '' KARBİL YAPI '' ...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg?w=1060&t=st=1686833192~exp=1686833792~hmac=fd1eb5ac94bcde50ca5f922745cc3d73c39233e90ebf19499971d0e8daa7ae45')] bg-gray-700 bg-blend-multiply">
              <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 my-auto">
                <h1 className="mb-2 text-2xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                  KONFOR VE ŞIKLIĞI BİR ARADA BULABİLECEĞİNİZ MODERN YAPILARLA
                  HİZMETİNİZDEYİZ...
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  Bir evden daha fazlası...
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/real-estate-agent-with-house-model-keys_1150-17813.jpg?w=1060&t=st=1686924560~exp=1686925160~hmac=0e45ee426eb4a2f679681623f7438dc10ce7fc4e34270b5c9336eb244726e6e3')] bg-gray-600 bg-blend-multiply">
              <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 my-auto">
                <h2 className="mb-2 text-2xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                  İSTER ANAHTAR TESLİM, İSTER İLERİ KABA TÜRKİYENİN HER YERİNE
                  HİZMET VERMEKTEYİZ..
                </h2>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  Sevkiyattan teslimata KARBİL YAPI yanınızda ....
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
export default CCarousel
