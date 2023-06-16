import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const CCarousel = () => {

  return (
    <>
      <div className="relative w-full h-full">
        <Swiper
          modules={[
            Autoplay,
            
          ]}
          // spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 3000,
          }}
        >
          <SwiperSlide>
            <section
              class="bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?w=1380&t=st=1686819142~exp=1686819742~hmac=dfda627fc8b25afd182b5508a3c33741d673565abc6e069aa7868cc84913d083')] bg-gray-500 bg-blend-multiply"
            >
              <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">GELECEK NESİLLERE YAŞANILABİLİR ALANLAR İNŞAA EDİYORUZ..</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 p-1">Konfor ve Huzurun adresi '' KARBİL YAPI '' ...</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Biz Kimiz?
                  </a>
                  <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    Detaylı Bilgi
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              class="bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150762.jpg?w=1060&t=st=1686833192~exp=1686833792~hmac=fd1eb5ac94bcde50ca5f922745cc3d73c39233e90ebf19499971d0e8daa7ae45')] bg-gray-700 bg-blend-multiply"
            >
              <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">KONFOR VE ŞIKLIĞI BİR ARADA BULABİLECEĞİNİZ MODERN YAPILARLA HİZMETİNİZDEYİZ...</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Bir evden daha fazlası...</p>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              class="bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?w=1060&t=st=1686834803~exp=1686835403~hmac=20b085bae3750e4ca640807df503676f17fa3e839ac424b984b7233c9c71e3c2')] bg-gray-600 bg-blend-multiply"
            >
              <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h2 class="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">İSTER ANAHTAR TESLİM, İSTER İLERİ KABA TÜRKİYENİN HER YERİNE HİZMET VERMEKTEYİZ..</h2>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Sevkiyattan teslimata KARBİL YAPI yanınızda ....</p>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
export default CCarousel
