// import SliderBnA from 'react-bna'

import BeforeAfterImageSlider from '../../../AfterBeforeManagement/BeforeAfterImageSlider'

const SteelStructure = () => {
  const beforeImageUrl = '/afterbefore/after.jpg'
  const afterImageUrl = '/afterbefore/before.jpg'

  return (
    <>
      {/* <div className="w-full">
        <BeforeAfterImageSlider
          beforeImage={beforeImageUrl}
          afterImage={afterImageUrl}
          width={600}
          height={600}
        />
      </div> */}
      {/* <div className="flex flex-auto my-auto space-x-10">
        <div className="flex-1 grid px-5 grid-cols-1 my-auto mt-6">
          <BeforeAfterImageSlider
            beforeImage={beforeImageUrl}
            afterImage={afterImageUrl}
            // width={600}
            height={400}
          />
        </div>
        <div className="flex-1 grid grid-cols-1 my-auto space-y-10 max-w-2xl text-[#609ecf]">
          <div className="text-center text-4xl  slider-font">Çelik Yapılar</div>
          <div className="text-lg sm:max-w-screen-md">
            Son yıllarda özellikle de birçok kişi için prefabrik ev oldukça cazip olan yatırımlar
            arasında yer alıyor. Aslında bakıldığı zaman birçok yönden oldukça da kazançlı olan
            evler, aynı zamanda değişik olan tasarımları, kişiye özel olan renkleri, büyüklükleri ve
            kalitesi ile ön plana çıkıyor. Aynı zamanda bu evlerin artık hemen hepsinin çelik ev
            şeklinde imal edilmesi de sağlamlık açısından son derece önemli olan konular arasında
            yer alıyor.
          </div>
        </div>
      </div> */}
    </>
  )
}
export default SteelStructure
