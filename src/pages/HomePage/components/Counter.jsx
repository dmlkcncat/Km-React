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
        <div className="flex flex-row gap-5 p-5 justify-center mx-auto bg-blue-100 w-full">
          {items.map((item) => (
            <Card
              key={item.id}
              className="shadow-2xl h-48 w-48 flex justify-center items-center circle-div"
              style={{ borderRadius: '100px', backgroundColor: '#4D93C3' }}
            >
              <p className="text-gray-800 text-2xl font-bold text-center">
                <Counter
                  from={1}
                  to={item?.count}
                />
              </p>
              <p className="text-gray-800 font-bold">{item?.name}</p>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}

export default App
