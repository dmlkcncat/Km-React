import classNames from "classnames"
import { Navbar } from "flowbite-react"
import { useAppSelector } from "../store"

const NNavbar = () => {
  const { type } = useAppSelector((state) => state.navbarSlice)
  console.log({ type })

  return (
    <>
      <Navbar
        style={{ borderRadius: "none" }}
        className={classNames({
          "z-10 absolute bg-transparent top-0 left-0 w-full":
            type == "transparent",
          "bg-black": type == "classic",
        })}
        fluid={true}
        rounded={false}
      >
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
            style={{ height: 48 }}
            alt="Flowbite Logo"
          />
          <span
            className="self-center whitespace-nowrap text-xl font-semibold text-white"
            style={{ fontFamily: "Garamond, monospace " }}
          >
            KARBİL YAPI
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={true}
            style={{ color: "white", fontFamily: "Garamond, monospace " }}
          >
            Anasayfa
          </Navbar.Link>
          <Navbar.Link
            // as={{
            //   $$typeof: Symbol(react.forward_ref),
            //   render: LinkWithRef,
            // }}
            href="/hakkımızda"
            style={{ color: "white", fontFamily: "Garamond, monospace " }}
          >
            Hakkımızda
          </Navbar.Link>
          <Navbar.Link
            href="#"
            style={{ color: "white", fontFamily: "Garamond, monospace " }}
          >
            Hizmetler
          </Navbar.Link>
          <Navbar.Link
            href="#"
            style={{ color: "white", fontFamily: "Garamond, monospace " }}
          >
            Referanslar
          </Navbar.Link>
          <Navbar.Link
            href="#"
            style={{ color: "white", fontFamily: "Garamond, monospace " }}
          >
            SSS
          </Navbar.Link>
          <Navbar.Link
            href="#"
            style={{ color: "white", fontFamily: "Garamond, monospace " }}
          >
            İletişim
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NNavbar
