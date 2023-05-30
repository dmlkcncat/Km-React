import { Carousel, Navbar } from "flowbite-react"
import { useEffect } from "react"
import { useAppDispatch } from "../../../store"
import {
  setNavbarClassic,
  setNavbarTransparent,
} from "../../../store/navbarSlice"

const CCarousel = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setNavbarTransparent())

    return () => {
      dispatch(setNavbarClassic())
    }
  }, [])

  return (
    <>
      <div className="relative w-full h-screen">
        <Carousel slide={true}>
          <img
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            src=""
          />
          <img
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            src=""
          />
          <img
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            src=""
          ></img>
        </Carousel>
      </div>
    </>
  )
}
export default CCarousel
