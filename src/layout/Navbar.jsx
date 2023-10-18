// import classNames from "classnames"
import { Navbar } from 'flowbite-react'
import { forwardRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavbarLink = ({ to, text }) => {
  const location = useLocation()

  return (
    <Navbar.Link
      as={Link}
      to={to}
      active={location.pathname === to}
    >
      {text}
    </Navbar.Link>
  )
}

const NNavbar = forwardRef((props, ref) => {
  return (
    <div
      className="sticky top-0 z-50"
      ref={ref}
    >
      <Navbar
        style={{
          borderRadius: 'none',
          backgroundColor: '#ffffff',
          zIndex: 10,
        }}
        className="shadow-lg"
        fluid={true}
      >
        <Navbar.Brand to="/navbars">
          <img
            src="/img/logo.png"
            className="mr-3 h-6 sm:h-9"
            style={{ height: 60 }}
          />
          <a href="/">
            <span className="self-center whitespace-nowrap text-2xl font-bold text-[#1d5889] neon-blue-light">
              KM
            </span>
            <span className="px-2 self-center whitespace-nowrap text-2xl  text-[#acbbc8] neon-blue-light">
              MAKİNE
            </span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavbarLink
            to="/"
            text="Anasayfa"
          />
          <NavbarLink
            to="/kurumsal"
            text="Kurumsal"
          />
          <NavbarLink
            to="/hizmetler"
            text="Hizmetler"
          />
          <NavbarLink
            to="/proje"
            text="Projeler"
          />
          <NavbarLink
            to="/"
            text="Fabrikamız"
          />
          <NavbarLink
            to="/referanslar"
            text="Referanslar"
          />
          <NavbarLink
            to="/haberler"
            text="Haberler"
          />
          <NavbarLink
            to="/belgeler"
            text="Kalite Belgelerimiz"
          />
          <NavbarLink
            to="/iletisim"
            text="İletişim"
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
})

NNavbar.displayName = 'NNavbar'

export default NNavbar
