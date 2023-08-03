import BeforeAfterImageSlider from '../../../AfterBeforeManagement/BeforeAfterImageSlider'

const PrefabricatedBuilding = () => {
  const beforeImageUrl = '/afterbefore/after.jpg'
  const afterImageUrl = '/afterbefore/before.jpg'

  return (
    <div className="flex flex-auto my-auto space-x-10">
      <div className="flex-1 my-auto space-y-10 max-w-2xl text-[#364e63]">
        <div className="text-center text-4xl font-extrabold animate-bounce slider-font">
          Prefabrik Yapılar
        </div>
        <div className="text-lg ">
          Prefabrik evler, modern çağın inşaat teknolojisinin getirdiği avantajlarla dikkat çeken
          yapılar arasında yer almaktadır. Bu tür evler, fabrikalarda önceden hazırlanan ve daha
          sonra inşaat alanına taşınan elemanlarla inşa edilir. Önceden belirlenen standartlara
          uygun üretilen bu yapı elemanları, hem hızlı kurulum sağlar hem de ekonomik bir seçenek
          sunar. Prefabrikasyon süreci, kalite kontrolünü arttırarak daha dayanıklı ve çevre dostu
          yapılar elde edilmesini sağlar. Ayrıca, prefabrik evlerin taşınabilirliği, müşterilere
          daha fazla esneklik ve kullanım alanı sunar.
        </div>
      </div>
      <div
        className="flex-1 my-auto"
        style={{ display: 'grid', alignItems: 'center' }}
      >
        <BeforeAfterImageSlider
          beforeImage={beforeImageUrl}
          afterImage={afterImageUrl}
          width={600}
          height={400}
        />
      </div>
    </div>
  )
}
export default PrefabricatedBuilding
