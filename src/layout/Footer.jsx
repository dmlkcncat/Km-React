import { Footer } from "flowbite-react"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { SlLocationPin } from "react-icons/sl"

const FFooter = () => {
  return (
    <>
      <Footer
        style={{ borderRadius: "none", backgroundColor: "white" }}
      >
        <div className="w-full">
          <div>
            <img className="mx-auto w-20" src="/img/karbillogo.png" alt="" />
          </div>
          <div className="grid w-full grid-cols-2 gap-5 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Hızlı Menü" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Anasayfa
                </Footer.Link>
                <Footer.Link href="#">
                  Hakkımızda
                </Footer.Link>
                <Footer.Link href="#">
                  İletişim
                </Footer.Link>
                <Footer.Link href="#">
                  Ürünler
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Projeler" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Kızılcapınar - 113 M2
                </Footer.Link>
                <Footer.Link href="#">
                  Hamzavakıflı - 141 M2
                </Footer.Link>
                <Footer.Link href="#">
                  Keşkek - 90 M2
                </Footer.Link>
                <Footer.Link href="#">
                  Seyfetler - 89 M2
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="İletişim" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  <SlLocationPin />
                  <span>
                    Ören Mah. Hüseyin İbrahim İzmirli Sok.
                    No:159 KDZ EREĞLİ /ZONGULDAK
                  </span>
                </Footer.Link>
                <Footer.Link href="#">
                  Android
                </Footer.Link>
                <Footer.Link href="#">
                  Windows
                </Footer.Link>
                <Footer.Link href="#">
                  MacOS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-200 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="KOBİZON PDM"
              href="#"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className="animate-pulse" style={{ color: "#3b5998" }} href="#" icon={BsFacebook} />
              <Footer.Icon className="animate-pulse" style={{ color: "#C13584" }} href="#" icon={BsInstagram} />
              <Footer.Icon className="animate-pulse" style={{ color: "#00acee" }} href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default FFooter
