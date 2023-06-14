import { useParams } from "react-router-dom"
import SideBarProcesses from "./components/SideBarProcesses"
import { useEffect, useState } from "react"
import { Card } from "flowbite-react"
import { ProcessesService } from "../../services"
import { Swiper, SwiperSlide } from "swiper/react"

const DetailProcessesPage = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    ProcessesService.getById(id)
      .then((res) => {
        setItems(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-3">
      {!loading ? (
        <>
          <div className="flex flex-row gap-4">
            <div className="container p-2">
              {items.map((item) => (
                <Card className="w-full h-full grid grid-cols-2">
                  <div>
                    <img src={item.firstImage} />
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={3}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide>Slide 1</SwiperSlide>
                      <SwiperSlide>Slide 2</SwiperSlide>
                      <SwiperSlide>Slide 3</SwiperSlide>
                      <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex-none">
              <SideBarProcesses />
            </div>
          </div>
        </>
      ) : (
        <div>Yüklenemedi..</div>
      )}
    </div>
  )
}
export default DetailProcessesPage
