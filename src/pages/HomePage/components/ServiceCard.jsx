import { useSpring, animated } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'
import { isInViewport } from '../../../utils'

const Product = () => {
  const sectionRef = useRef()
  const [showA, setShowA] = useState(false)

  const fadeStyles = useSpring({
    config: {},
    from: { x: -450 },
    to: {
      x: showA ? 0 : -450,
    },
  })

  const scrollListener = (...e) => {
    const visible = isInViewport(sectionRef.current, 100)
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
      >
        <div className="p-3"></div>
        <div className="text-center text-4xl font-extrabold text-teal-900">Son Projelerimiz</div>
        <div className="p-6"></div>
        <div>
          <section className="cards-animation mx-auto">
            <article className="card-animation card--1">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">220 M2 Çelik Konstrüksiyon</span>
                <h3 className="card__title"></h3>
                <span className="card__by">Düzce</span>
              </div>
            </article>

            <article className="card-animation card--2">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">253 M2 DUBLEKS Çelik Konstrüksiyon</span>
                <h3 className="card__title"></h3>
                <span className="card__by">Ereğli</span>
              </div>
            </article>

            <article className="card-animation card--3">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">121 M2 DUBLEKS Çelik Konstrüksiyon</span>
                <h3 className="card__title"></h3>
                <span className="card__by">Ereğli</span>
              </div>
            </article>

            <article className="card-animation card--4">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">220 M2 Çelik Konstrüksiyon</span>
                <h3 className="card__title"></h3>
                <span className="card__by">Düzce</span>
              </div>
            </article>

            <article className="card-animation card--5">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">220 M2 Çelik Konstrüksiyon</span>
                <h3 className="card__title"></h3>
                <span className="card__by">Düzce</span>
              </div>
            </article>
          </section>
        </div>
        <div className="p-10"></div>
      </animated.section>
    </div>
  )
}
export default Product
