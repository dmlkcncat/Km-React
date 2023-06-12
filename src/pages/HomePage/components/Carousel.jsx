import { Carousel, Navbar } from "flowbite-react"
import { useEffect, useState } from "react"
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

  const sliderimages = [
    {
      id: 1,
      imgurl:
        "https://images.wallpaperscraft.com/image/single/city_home_building_165558_1280x720.jpg",
    },
    {
      id: 2,
      imgurl:
        "https://images.wallpaperscraft.com/image/single/buildings_towers_skyscrapers_911226_1280x720.jpg",
    },
    {
      id: 3,
      imgurl:
        "https://images.wallpaperscraft.com/image/single/buildings_lights_skyscrapers_904558_1280x720.jpg",
    },
    {
      id: 4,
      imgurl:
        "https://images.wallpaperscraft.com/image/single/buildings_skyscrapers_city_896552_1280x720.jpg",
    },
  ]

  return (
    <>
      <div className="relative w-full h-screen">
        <Carousel slide={true}>
          {sliderimages.map((item) => (
            <img
              className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
              src={item.imgurl}
            />
          ))}
        </Carousel>
      </div>
    </>
  )
}
export default CCarousel
