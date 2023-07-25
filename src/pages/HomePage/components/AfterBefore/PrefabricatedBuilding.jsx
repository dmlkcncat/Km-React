import SliderBnA from 'react-bna'

const PrefabricatedBuilding = () => {
  return (
    <div className="flex flex-auto my-auto space-x-10">
      <div className="flex-1 my-auto space-y-10 max-w-2xl text-[#364e63]">
        <div className="text-center text-4xl font-extrabold animate-bounce slider-font">
          Dubleks Yapılar
        </div>
        <div className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptates cum expedita
          hic deserunt deleniti iure illo. Fugiat officia odit dignissimos enim et, quis quo
          corrupti vitae animi quibusdam error. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Aliquid voluptates cum expedita hic deserunt deleniti iure illo. Fugiat officia odit
          dignissimos enim et, quis quo corrupti vitae animi quibusdam error.
        </div>
      </div>
      <div className="flex-1">
        <SliderBnA
          before="/afterbefore/karbila2.png"
          after="/afterbefore/karbil2.png"
          divisorBorder={true}
          imageHeight={50}
        />
      </div>
    </div>
  )
}
export default PrefabricatedBuilding
