import { Footer } from "flowbite-react"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

const FFooter = () => {
  return (
    <>
      <Footer container={true}>
        <div className="w-full">
          <div>
            <img
              className="mx-auto w-16"
              src="/img/logokarbil.jpg"
              alt=""
            />
            {/* <span>Karbil Yapı</span> */}
          </div>
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              {/* <Footer.Brand
                href="#"
                src="../../public/img/logokarbil.jpg"
                alt="Flowbite Logo"
                name="Flowbite"
              /> */}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Hakkımızda" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Misyon</Footer.Link>
                  <Footer.Link href="#">Hedeflerimiz</Footer.Link>
                  <Footer.Link href="#">Neler Üretiyoruz?</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="REFERANSLAR" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Tamamlanan Projeler</Footer.Link>
                  <Footer.Link href="#">Devam Eden Projeler</Footer.Link>
                  <Footer.Link href="#">İl Bazlı Projeler</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Bize Ulaşın" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">İnstagram</Footer.Link>
                  <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="https://kobizon.com.tr/"
              by="Kobizon PDM"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default FFooter
