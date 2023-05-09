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
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
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
          <Navbar.Link href="/navbars">Hizmetlerimiz</Navbar.Link>
          <Navbar.Link href="/navbars">Ürünlerimiz</Navbar.Link>
          <Navbar.Link href="/navbars">İletişim</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NNavbar
