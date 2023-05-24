import { Navbar } from "flowbite-react"

const NNavbar = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand
          // as={{
          //   $$typeof: Symbol(react.forward_ref),
          //   render: LinkWithRef,
          // }}
          to="/navbars"
        >
          <img
            src="./img/logokarbil.jpg"
            className="mr-3 h-6 sm:h-9"
            style={{height:48}}
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Karbil Yapı
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Anasayfa
          </Navbar.Link>
          <Navbar.Link
            // as={{
            //   $$typeof: Symbol(react.forward_ref),
            //   render: LinkWithRef,
            // }}
            to="/navbars"
          >
            Hakkımızda
          </Navbar.Link>
          <Navbar.Link href="/navbars">Hizmetler</Navbar.Link>
          <Navbar.Link href="/navbars">Referanslar</Navbar.Link>
          <Navbar.Link href="/navbars">SSS</Navbar.Link>
          <Navbar.Link href="/navbars">İletişim</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NNavbar
