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
        <div className="flex flex-row gap-5 p-5 justify-center mx-auto counter-svg w-full">
          {items.map((item) => (
            <Card
              key={item.id}
              className="h-48 w-48 flex justify-center items-center circle-div transition duration-500 select-none cursor-pointer scale-100 hover:scale-105"
              style={{ borderRadius: '100px', backgroundColor: item?.hexCode }}
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

export default App
