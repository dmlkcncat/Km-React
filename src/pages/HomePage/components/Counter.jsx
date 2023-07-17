import React from "react"
import Counter from "../../../components/Counter"
import { Card } from "flowbite-react"

const App = () => {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center">
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center items-center"
          style={{ borderRadius: "100px", backgroundColor: "#afacd8" }}
        >
          <p className="text-gray-800 text-2xl font-bold">
            <Counter from={1} to={10} />
          </p>
          <p>Tamamlanan Proje</p>
        </Card>
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center items-center"
          style={{ borderRadius: "100px", backgroundColor: "#b6b3d1" }}
        >
          <p className="text-gray-800 text-2xl font-bold">
            <Counter from={50} to={100} />
          </p>
          <p>Mutlu Müşteri</p>
        </Card>
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center items-center"
          style={{ borderRadius: "100px", backgroundColor: "#bcbbc9" }}
        >
          <p className="text-gray-800 text-2xl font-bold">
            {/* <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1> */}
            <Counter from={1000} to={5000} />
          </p>
          <p>İlde Proje</p>
        </Card>
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center items-center"
          style={{ borderRadius: "100px", backgroundColor: "#c2c2c2" }}
        >
          <p className="text-gray-800 text-2xl font-bold">
            {/* <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1> */}
            <Counter from={-10} to={0} />
          </p>
          <p>Tamamlanan Proje</p>
        </Card>
      </div>
    </>
  )
}

export default App
