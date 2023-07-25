import SliderBnA from 'react-bna'

const SteelStructure = () => {
  return (
    <div className="flex flex-auto my-auto space-x-10">
      <div className="flex-1">
        <SliderBnA
          before="/afterbefore/karbila1.png"
          after="/afterbefore/karbil1.png"
          divisorBorder={true}
          imageHeight={50}
        />
      </div>
      <div className="flex-1 my-auto space-y-10 max-w-2xl text-[#eeeeee]">
        <div className="text-center text-4xl font-extrabold animate-bounce slider-font">
          Çelik Yapılar
        </div>
        <div className="text-lg">
          Son yıllarda özellikle de birçok kişi için prefabrik ev oldukça cazip olan yatırımlar
          arasında yer alıyor. Aslında bakıldığı zaman birçok yönden oldukça da kazançlı olan evler,
          aynı zamanda değişik olan tasarımları, kişiye özel olan renkleri, büyüklükleri ve kalitesi
          ile ön plana çıkıyor. Aynı zamanda bu evlerin artık hemen hepsinin çelik ev şeklinde imal
          edilmesi de sağlamlık açısından son derece önemli olan konular arasında yer alıyor.
        </div>
      </div>
    </div>
  )
}
export default SteelStructure
