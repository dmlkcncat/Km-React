import { useState, useEffect } from "react"
import { Autoplay, Controller, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { ProductService } from "../../../services"


const Product = () => {
  const [items, setItems] = useState(false)

  useEffect(() => {
    ProductService.getAll().then((res) => {
      setItems(res.data)
      console.log(setItems);
    })
  }, [])

  const [controlledSwiper, setControlledSwiper] = useState(null)
  return (
    <>
      <section
        className="bg-12 p-t-92 p-b-60"
      >
        <div>
          <div className="flex-col-c-c p-b-50 py-3">
          </div>
          {items && items.map((x) => (
            <Swiper
              modules={[Pagination, Controller, Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
              }}
              controller={{ control: controlledSwiper }}
              onSwiper={setControlledSwiper}
            >
              {/* {items.map((item) => (
              <SwiperSlide key={item.id}>
                <Card
                  className="row justify-content-center py-3"
                  rel="pulse-shrink"
                  style={{ margin: "10% 0" }}
                >
                  <a>
                    <img
                      className="rounded-circle w-100"
                      style={{ objectFit: "contain" }}
                      src={item.firstImage}
                      width={"100 %"}
                    />
                    <p>{item.name}</p>
                  </a>
                </Card>
              </SwiperSlide>
            ))} */}
              <SwiperSlide key={x?.id}>
                <p>{x?.name}</p>
              </SwiperSlide>
            </Swiper>
          ))}

        </div>
      </section>
    </>
  )
}
export default Product

