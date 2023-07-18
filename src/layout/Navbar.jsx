// import classNames from "classnames"
import { Navbar } from "flowbite-react"
import { forwardRef } from "react"
import { Link, useLocation } from "react-router-dom"

const NavbarLink = ({ to, text }) => {
  const location = useLocation()

  console.log(location)

  return <Navbar.Link as={Link} to={to} active={location.pathname === to}>{text}</Navbar.Link>
}

const NNavbar = forwardRef((props, ref) => {
  // const { type } = useAppSelector((state) => state.navbarSlice)
  // console.log({ type })
  return (
    <div className="sticky top-0 z-50"
      ref={ref}
    >
      <Navbar
        style={{ borderRadius: "none", backgroundColor: "#f0f5ff", zIndex: 10 }}
        // className={classNames({
        //   "z-10 absolute bg-transparent top-0 left-0 w-full font-serif":
        //     type == "transparent",
        //   "bg-blue-500": type == "classic",
        // })}
        className="shadow-lg"
        fluid={true}
      >
        <Navbar.Brand to="/navbars">
          <img
            src="/img/karbillogo.png"
            className="mr-3 h-6 sm:h-9"
            style={{ height: 60 }}
          />
          <a href="/">
            <span className="self-center whitespace-nowrap text-2xl font-bold text-[#60a3cf] neon-blue-light">
              KARBİL YAPI
            </span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavbarLink to="/" text="Anasayfa" />
          <NavbarLink to="/hakkimizda" text="Hakkımızda" />
          <NavbarLink to="/urunler" text="Ürünler" />
          <NavbarLink to="/hizmetler" text="Hizmetler" />
          <NavbarLink to="/sss" text="SSS" />
          <NavbarLink to="/iletisim" text="İletişim" />
        </Navbar.Collapse>
      </Navbar>
    </div >
  )
})

NNavbar.displayName = 'NNavbar'

export default NNavbar
