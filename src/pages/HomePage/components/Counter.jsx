import React, { useEffect, useState } from 'react'
import Counter from '../../../components/Counter'
import { Card } from 'flowbite-react'
import { CountersService } from '../../../services'
import { Loading } from '../../../components/LoadingSpinner'

const Counter = () => {
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
          className="justify-center gap-24 mx-auto counter-svg w-full grid py-5 grid-cols-2 px-5 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 xl:px-96 md:px-20"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              className="xl:h-48 xl:w-48 lg:h-48 lg:w-48 md:h-36 md:w-36 sm:w-full sm:h-auto md:mx-auto sm:text-sm sm:whitespace-pre-wrap lg:mx-auto xl:mx-auto text-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${item.hexCode})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <p className="text-2xl font-bold text-center text-white">
                <Counter
                  from={1}
                  to={item?.count}
                />
              </p>
              <p className="text-white font-bold">{item?.name}</p>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}

export default Counter
