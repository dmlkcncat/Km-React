import { Card } from 'flowbite-react'
import { ProcessesService } from '../../services'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/LoadingSpinner'
import { MdArrowUpward } from 'react-icons/md'

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
      <div
        className="py-10 text-center text-4xl font-extrabold text-[#1d5889] slider-font relative"
        style={{
          fontSize: '2rem',
        }}
      >
        Hizmetler
        <div className="absolute w-80 h-2 bg-[#b5c2ce] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item) => (
                <Card key={item?.id}>
                  <div
                    style={{
                      backgroundColor: '#b5c2ce',
                      borderRadius: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '10px',
                      fontSize: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                      }}
                    >
                      {item?.category}
                    </span>
                  </div>
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
                    <p
                      className="text-center"
                      style={{ fontSize: '14px' }}
                    >
                      {item?.name}
                    </p>
                  </p>
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
