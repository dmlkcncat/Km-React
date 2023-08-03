import { useSpring, animated } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'
import { isInViewport } from '../../../utils'
import { LastProjectsService } from '../../../services'
import { Loading } from '../../../components/LoadingSpinner'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Product = () => {
  const sectionRef = useRef()
  const [showA, setShowA] = useState(false)

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState(false)

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

  useEffect(() => {
    LastProjectsService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <div className="overflow-hidden lastproject-svg">
      <div className="p-5"></div>
      <animated.section
        ref={sectionRef}
        style={fadeStyles}
      >
        <div className="p-3"></div>
        <div className="text-center text-4xl font-extrabold text-[#eeeeee] animate-bounce slider-font">
          Referanslarımız
        </div>
        <div className="p-6"></div>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <section className="cards-animation mx-auto">
              {items &&
                items.map((item, index) => (
                  <article
                    key={item?.id}
                    className="card-animation card--1"
                  >
                    <div className="card__img"></div>
                    <a className="card_link">
                      <div
                        className="card__img--hover"
                        style={{ '--source': `url(${item.path})` }}
                      ></div>
                    </a>
                    <div className="card__info">
                      <span className="card__category">{item.name}</span>
                      <h3 className="card__title"></h3>
                      <span
                        className="card__by"
                        style={{ color: '#364e63'}}
                      >
                        {item.location}
                      </span>
                    </div>
                  </article>
                ))}
            </section>
          )}
        </div>
        <div className="p-10"></div>
        <div className="p-2">
          <Button
            className="items-center mx-auto text-teal-900"
            style={{ backgroundColor: '#f2f2f2', color: '#364e63' }}
          >
            <Link to="/urunler">Tüm Projeleri Görüntüle</Link>
          </Button>
        </div>
        <div className="p-5"></div>
      </animated.section>
    </div>
  )
}
export default Product
