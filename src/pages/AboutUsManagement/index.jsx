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
      {/* <div className="w-full opacity-70">
        <img
          src="/img/aboutus.jpg"
          style={{ userSelect: 'none', height: '350px', width: '100%' }}
        />
        <div className="z-10 mx-auto max-w-screen-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iste illo accusantium
          praesentium laboriosam dolorum commodi, laborum magni culpa corporis harum quia officia
          quaerat dolor sequi architecto, aperiam dolores animi.
        </div>
      </div> */}
      <section
        className="bg-center bg-cover bg-no-repeat bg-[url('https://z500.com/wp-content/uploads/2014/03/3.jpg')] bg-gray-400 bg-blend-multiply"
        style={{ height: '350px', width: '100%' }}
      >
        <div
          className="px-4 mx-auto max-w-screen-xl text-center py-24 h-full"
          style={{ display: 'flex' }}
        >
          <h1
            className="w-full text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl slider-font items-center"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            Kurumsal
          </h1>
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
                <div className="w-full p-4 bg-[#40798c] text-xl font-bold slider-font text-center text-white">
                  {item.title}
                  <div className="aboutus-divider"></div>
                </div>
                <Card className="bg-[#f7f7f7] w-full">
                  <div
                    className="text-[#364e63] mt-8 slider-font p-10 max-w-full w-full"
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
