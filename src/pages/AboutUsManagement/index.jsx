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
    <div>
      <section style={{ height: '350px', width: '100%', position: 'relative' }}>
        <img
          src="/img/aboutUs.jpg"
          alt="Background Image"
          style={{
            userSelect: 'none',
            height: '350px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          className="bg-gray-400 bg-blend-multiply absolute top-0 left-0 w-full h-full"
          style={{ opacity: 0.2 }}
        >
          <div
            className="px-4 mx-auto max-w-screen-xl text-center py-24 h-full"
            style={{ display: 'flex' }}
          ></div>
        </div>
      </section>

      <div className="flex flex-row gap-4 p-10 sss-svg">
        {loading ? (
          <Loading />
        ) : (
          <Tabs.Group
            aria-label="Pills"
            style="pills"
            className="mx-auto"
          >
            {data.map((item) => (
              <Tabs.Item
                title={item.title}
                key={item.id}
                className="mx-auto"
              >
                <div className="w-full p-4 bg-[#44759d] text-xl font-bold slider-font text-center text-white">
                  {item.title}
                  <div className="aboutus-divider"></div>
                </div>
                <Card className="bg-[#f7f7f7] w-full">
                  <div
                    className="text-[#1d5889] mt-8 slider-font p-10 max-w-full w-full"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></div>
                </Card>
              </Tabs.Item>
            ))}
          </Tabs.Group>
        )}
      </div>
    </div>
  )
}
export default index
