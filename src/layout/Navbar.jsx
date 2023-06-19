import classNames from "classnames"
import { Navbar } from "flowbite-react"
import { useAppSelector } from "../store"
import { Link } from "react-router-dom"

const NNavbar = () => {
  // const { type } = useAppSelector((state) => state.navbarSlice)
  // console.log({ type })

  return (
    <>
      <Navbar
        style={{ borderRadius: "none", backgroundColor:"white" }}
        // className={classNames({
        //   "z-10 absolute bg-transparent top-0 left-0 w-full font-serif":
        //     type == "transparent",
        //   "bg-blue-500": type == "classic",
        // })}
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
          <Navbar.Link className="neon-blue-light" active={true}>
            <Link to="/">Anasayfa</Link>
          </Navbar.Link>
          <Navbar.Link className="neon-blue-light">
            <Link to="/">Hakkımızda</Link>
          </Navbar.Link>
          <Navbar.Link className="neon-blue-light">
            <Link to="/urunler">Ürünler</Link>
          </Navbar.Link>
          <Navbar.Link className="neon-blue-light">
            <Link to="/hizmetler">Hizmetler</Link>
          </Navbar.Link>
          <Navbar.Link className="neon-blue-light">
            <Link to="/">İletişim</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NNavbar
