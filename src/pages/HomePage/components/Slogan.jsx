import { useSpring, animated } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'
import { isInViewport } from '../../../utils'

const Slogan = () => {
  const sectionRef = useRef()
  const [showA, setShowA] = useState(false)

  const fadeStyles = useSpring({
    config: {},
    from: { x: 600 },
    to: {
      x: showA ? 0 : 600,
    },
  })

  const scrollListener = (...e) => {
    const visible = isInViewport(sectionRef.current, 350)
    if (visible) setShowA(visible)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [sectionRef.current])

  return (
    <div className="bg-white overflow-hidden">
      <animated.section
        ref={sectionRef}
        style={fadeStyles}
        className="dark:bg-gray-900 px-20"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="animate-bounce text-sky-900 max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
              Karbil Yapı ile İnşa Etmekten Daha Fazlasını Sunan Prefabrik Evler
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-600 bg-slate-200 shadow-lg p-3 hover:bg-slate-300 rounded-lg lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Karbil Yapı'nın özgün prefabrik evleri, yalnızca konforlu bir yaşam alanı değil, aynı
              zamanda kişisel tarzınızı yansıtabileceğiniz bir ev ortamı sunarak size benzersiz bir
              deneyim yaşatıyor.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/img/prefabrik.png"
              alt="mockup"
              width={'100%'}
            />
          </div>
        </div>
        <div className="p-5"></div>
      </animated.section>
    </div>
  )
}
export default Slogan
