import { Card, Carousel } from "flowbite-react"
import { SlFire } from "react-icons/sl"
import { TbMeat } from "react-icons/tb"
import { BiSwim } from "react-icons/bi"

const ServiceCard = () => {
  return (
    <div className="px-15 h-64 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <div className="grid grid-cols-3 gap-3 justify-content-center items-center">
          <Card className="h-60">
            <div className="mx-auto">
              <BiSwim style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              Prefabrik Havuz Sistemleri
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="h-60">
            <div className="mx-auto">
              <TbMeat style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB Barbekü
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="h-60">
            <div className="mx-auto">
              <SlFire style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB Şömine
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-content-center items-center">
          <Card className="h-60">
            <div className="mx-auto">
              <BiSwim style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB DIŞ CEPHE SÖVE KAPLAMA
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="h-60">
            <div className="mx-auto">
              <TbMeat style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB PVC PENCERE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="h-60">
            <div className="mx-auto">
              <SlFire style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB MUTFAK DOLABI
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-5 justify-content-center items-center">
          <Card className="h-60">
            <div className="mx-auto">
              <BiSwim style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB LAMİNANT
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="h-60">
            <div className="mx-auto">
              <TbMeat style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB KÜPEŞTE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="h-60">
            <div className="mx-auto">
              <SlFire style={{ color: "red" }} />
            </div>
            <h5 className="text-center text-xl tracking-tight text-gray-800 dark:text-white">
              KB KALEBODUR
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </Carousel>
    </div>
  )
}
export default ServiceCard
