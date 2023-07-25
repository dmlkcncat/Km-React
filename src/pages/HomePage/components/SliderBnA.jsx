const SliderBnA = () => {
  return (
    <div>
      <div className="lg:flex items-center my-auto flex">
        {/* <div className="space-y-4">
          <span className="flex w-2.5 h-2.5 bg-gray-700 rounded-full mr-1.5 flex-shrink-0"></span>
          <span className="flex w-2.5 h-2.5 bg-gray-600 rounded-full mr-1.5 flex-shrink-0"></span>
          <span className="flex w-2.5 h-2.5 bg-gray-500 rounded-full mr-1.5 flex-shrink-0"></span>
          <span className="flex w-2.5 h-2.5 bg-gray-400 rounded-full mr-1.5 flex-shrink-0"></span>
          <span className="flex w-2.5 h-2.5 bg-gray-300 rounded-full mr-1.5 flex-shrink-0"></span>
          <span className="flex w-2.5 h-2.5 bg-gray-200 rounded-full mr-1.5 flex-shrink-0"></span>
        </div> */}
        <SliderBnA
          before="/afterbefore/karbil1.png"
          after="/afterbefore/karbila1.png"
          divisorBorder={true}
          imageHeight={66}
        />
        <SliderBnA
          before="/afterbefore/karbil2.png"
          after="/afterbefore/karbila2.png"
          divisorBorder={true}
          imageHeight={66}
        />
      </div>
    </div>
  )
}
export default SliderBnA
