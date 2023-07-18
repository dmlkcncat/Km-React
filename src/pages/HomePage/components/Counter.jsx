import React from "react"
import Counter from "../../../components/Counter"
import { Card } from "flowbite-react"

const App = () => {
  return (
    <>
      <div className="flex flex-row gap-5 p-5 justify-center mx-auto">
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center items-center"
          style={{ borderRadius: "100px", backgroundColor: "#a3b0e6" }}
        >
          <p className="text-gray-800 text-2xl font-bold text-center">
            <Counter from={1} to={10} />
          </p>
          <p>Tamamlanan Proje</p>
        </Card>
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center text-center"
          style={{ borderRadius: "100px", backgroundColor: "#bac3ed" }}
        >
          <p className="text-gray-800 text-2xl font-bold">
            <Counter from={50} to={100} />
          </p>
          <p>Mutlu Müşteri</p>
        </Card>
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center text-center"
          style={{ borderRadius: "100px", backgroundColor: "#d2d7f3" }}
        >
          <p className="text-gray-800 text-2xl font-bold">
            {/* <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1> */}
            <Counter from={1000} to={5000} />
          </p>
          <p>İlde Proje</p>
        </Card>
        <Card
          className="shadow-2xl h-48 w-48 flex justify-center text-center"
          style={{ borderRadius: "100px", backgroundColor: "#8a9de0" }}
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
