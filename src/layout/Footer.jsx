import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa'

const FFooter = () => {
  return (
    <>
      <Footer
        style={{ borderRadius: 'none' }}
        className="footer-bg"
      >
        <div className="w-full ">
          <div className="text-center py-6">
            <img
              className="mx-auto w-20"
              src="/img/logo.png"
              alt=""
            />
          </div>
          <div className="px-4 md:px-6 py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <Footer.Title title="Hızlı Menü" />
              <Footer.LinkGroup
                col
                className="grid grid-cols-2 place-items-baseline"
              >
                <Footer.Link href="#">Anasayfa</Footer.Link>
                <Footer.Link href="#">Kurumsal</Footer.Link>
                <Footer.Link href="#">Hizmetler</Footer.Link>
                <Footer.Link href="#">Projeler</Footer.Link>
                <Footer.Link href="#">Referanslar</Footer.Link>
                <Footer.Link href="#">Haberler</Footer.Link>
                <Footer.Link href="#">Kalite Belgeleri</Footer.Link>
                <Footer.Link href="#">İletişim</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Devam Eden Projeler" />
              <Footer.LinkGroup col>
                <Footer.Link>2. YÜKSEK FIRIN TUZLU SU DRENAJ HATTI</Footer.Link>
                <Footer.Link>2. YÜKSEK FIRIN TUZLU SU HATTI VE BOOSTER POMPA İSTASYONU</Footer.Link>
                <Footer.Link>CAOB3 Baca</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="İletişim" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  <div className="flex gap-2">
                    <div className="my-auto">
                      <SlLocationPin />
                    </div>
                    <span>HAMZAFAKILI MAH, YAŞAR TETİKER BLV NO 26, 67300 KDZ/Zonguldak</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="my-auto">
                      <FaPhoneAlt />
                    </div>
                    <span>+90 372 312 02 04</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="my-auto">
                      <FaMailBulk />
                    </div>
                    <span>info@kmmakine.com.tr</span>
                  </div>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="divider"></div>
          <div className="w-full px-4 py-6 flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 flex justify-center gap-4">
              <Footer.Icon
                className="animate-pulse"
                style={{ color: '#CFDAE3' }}
                href="https://www.facebook.com/serap.karadeniz.908"
                icon={BsFacebook}
              />
              <Footer.Icon
                className="animate-pulse"
                style={{ color: '#C13584' }}
                href="https://www.instagram.com/karbilyapicelik/"
                icon={BsInstagram}
              />
              <Footer.Icon
                className="animate-pulse"
                style={{ color: '#00acee' }}
                href="https://twitter.com/KarbilY"
                icon={BsTwitter}
              />
            </div>
            <div className="text-center w-full sm:mr-16">
              <Footer.Copyright
                by="KOBİZON PDM"
                href="#"
                year={2023}
              />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default FFooter
