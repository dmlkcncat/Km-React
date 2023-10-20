import React, { useEffect, useState } from 'react'
import Counter from '../../../components/Counter'
import { Card } from 'flowbite-react'
import { CountersService } from '../../../services'
import { Loading } from '../../../components/LoadingSpinner'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    CountersService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="justify-center mx-auto counter-svg w-full grid py-5 gap-16 px-4"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              className="xl:h-80 xl:w-60 lg:h-60 lg:w-40 md:h-36 md:w-36 sm:w-full sm:h-auto md:mx-auto sm:text-sm sm:whitespace-pre-wrap text-center flex flex-col justify-center items-center relative" // `relative` sınıfını ekledik
              style={{
                backgroundImage: `url(${item.hexCode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <p className="text-4xl font-bold text-white relative z-10">
                <Counter
                  from={1}
                  to={item?.count}
                />
              </p>
              <p className="text-white font-bold relative z-10">{item?.name}</p>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}

export default App
