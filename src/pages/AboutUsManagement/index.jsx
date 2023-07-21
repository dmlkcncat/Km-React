import { Card, Tabs } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { AboutUsService } from '../../services'
import { Loading } from '../../components/LoadingSpinner'

const index = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    AboutUsService.getAll().then((response) => {
      setData(response.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="p-3">
      <div className="flex flex-row gap-4">
        <div className="container p-2">
          <Card className="flex-auto h-full p-2">
            <div className="mx-auto">
              <img
                src="/img/karbillogo.png"
                width={180}
                style={{ userSelect: 'none' }}
              />
            </div>
            {loading ? (
              <Loading />
            ) : (
              <Tabs.Group
                aria-label="Pills"
                style="pills"
              >
                {data.map((item) => (
                  <Tabs.Item
                    title={item.title}
                    key={item.id}
                  >
                    <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
                  </Tabs.Item>
                ))}
              </Tabs.Group>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
export default index
