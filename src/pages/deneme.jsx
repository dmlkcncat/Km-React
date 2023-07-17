import React from "react"
import ReactBeforeSliderComponent from "react-before-after-slider-component"
import "react-before-after-slider-component/dist/build.css"

const FIRST_IMAGE = {
  imageUrl: "https://www.sahibinden.com/satilik-prefabrik-ev",
}
const SECOND_IMAGE = {
  imageUrl: "https://www.sahibinden.com/satilik-prefabrik-ev",
}

const deneme = () => {
  return (
    <ReactBeforeSliderComponent
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
    />
  )
}
export default deneme
