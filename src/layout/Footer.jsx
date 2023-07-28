import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

const FFooter = () => {
  return (
    <>
      <Footer
        style={{ borderRadius: 'none' }}
        className="footer-bg"
      >
        <div className="w-full ">
          <div className="">
            <img
              className="mx-auto w-20"
              src="/img/karbillogo.png"
              alt=""
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-5 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Hızlı Menü" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Anasayfa</Footer.Link>
                <Footer.Link href="#">Hakkımızda</Footer.Link>
                <Footer.Link href="#">İletişim</Footer.Link>
                <Footer.Link href="#">Ürünler</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Projeler" />
              <Footer.LinkGroup col>
                <Footer.Link>Kızılcapınar - 113 M2</Footer.Link>
                <Footer.Link>Hamzavakıflı - 141 M2</Footer.Link>
                <Footer.Link>Keşkek - 90 M2</Footer.Link>
                <Footer.Link>Seyfetler - 89 M2</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="İletişim" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  <span className="flex flex-auto gap-2">
                    <div className="my-auto">
                      <SlLocationPin />
                    </div>
                    <span>Ören Mah. Hüseyin İbrahim İzmirli Sok. No:159 KDZ EREĞLİ /ZONGULDAK</span>
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="divider"></div>
          <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="KOBİZON PDM"
              href="#"
              year={2023}
            />
            <div className="mr-16 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                className="animate-pulse"
                style={{ color: '#3b5998' }}
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
          </div>
        </div>
      </Footer>
    </>
  )
}

export default FFooter
