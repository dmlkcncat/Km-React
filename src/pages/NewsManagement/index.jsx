import React from 'react'
import { useEffect, useState } from 'react'
import { NewsService } from '../../services'

const NewsManagement = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    NewsService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <div className="bg-[#f2f2f2] pb-5">
      <div
        className="py-10 text-center text-4xl font-extrabold text-[#1d5889] slider-font relative"
        style={{
          fontSize: '2rem',
        }}
      >
        Haberler
        <div className="absolute w-80 h-2 bg-[#b5c2ce] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="py-8 cards-animation mx-auto">
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewsManagement
