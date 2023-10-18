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
    <div className="overflow-hidden">
      <animated.section
        ref={sectionRef}
        style={fadeStyles}
        className="bg-[#D2DCE4] px-20"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="slider-font  text-[#1d5889] max-w-2xl mb-4 text-xl  tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
              KM Makine; Başarı ve azim geleneğimizdir!..
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-600 p-3 rounded-lg lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Endüstriyel, sanayi ve enerji tesislerinde boru hatları kurulumu, makine & ekipman
              montajı, çelik konstrüksiyon imalat & montajı, bakım-onarım hizmetlerimizi dinamik
              şekilde ve kararlılıkla sürdürmekteyiz.
            </p>
          </div>
          <div className="mt-0 col-span-5 flex justify-center items-center">
            <img
              src="/img/makine.png"
              alt="mockup"
              width={'100%'}
              className="lg-hidden"
            />
          </div>
        </div>
      </animated.section>
    </div>
  )
}
export default Slogan
