import { useSpring } from '@react-spring/web'
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
    <div className="overflow-hidden">
      <div
        className="py-10 text-center text-4xl font-extrabold text-[#1d5889] slider-font relative"
        style={{
          fontSize: '2rem',
        }}
      >
        Projeler
        <div className="absolute w-80 h-2 bg-[#b5c2ce] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="p-6"></div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="cards-animation mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {items &&
                items.map((item, index) => (
                  <div
                    key={item?.id}
                    className="card-animation card--1"
                    style={{
                      marginBottom: '1rem',
                      minWidth: '250px',
                    }}
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
                      <span className="card__by">{item.location}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-8">
        <Button
          className="items-center mx-auto text-teal-900"
          style={{ backgroundColor: '#f2f2f2', color: '#364e63' }}
        >
          <Link to="/urunler">Tüm Projeleri Görüntüle</Link>
        </Button>
      </div>
    </div>
  )
}
export default Product
