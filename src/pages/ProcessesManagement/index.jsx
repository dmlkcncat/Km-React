import { Button, Card } from 'flowbite-react'
import { ProcessesService } from '../../services'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/LoadingSpinner'
import { MdArrowUpward } from 'react-icons/md'
import { generatePath } from 'react-router-dom'

const index = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    ProcessesService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="bg-[#f2f2f2]">
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
            Hizmetler
          </h1>
        </div>
      </section>
      <div className="flex flex-row gap-6 px-20 py-10">
        <div
          className={`scroll-to-top ${isVisible ? 'show' : ''}`}
          onClick={scrollToTop}
        >
          <span>
            <MdArrowUpward />
          </span>
        </div>
        <div className="flex-1">
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {items.map((item) => (
                <Card key={item?.id}>
                  <div className="image-hover img-zoom-in">
                    <img
                      src={item?.firstImage}
                      alt=""
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        aspectRatio: '1',
                      }}
                    />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p className="text-center">{item?.name}</p>
                  </p>
                  <Button
                    href={generatePath('hizmetler', { id: item.id })}
                    style={{ backgroundColor: '#40798c' }}
                  >
                    <p>Görüntüle</p>
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default index
