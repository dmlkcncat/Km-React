import { Button, Card } from "flowbite-react"
import SideBarProcesses from "./components/SideBarProcesses"
import { ProcessesService } from "../../services"
import { useEffect, useState } from "react"
import { getPath } from "../../utils"
import { Loading } from "../../components/LoadingSpinner"
import { MdArrowUpward } from "react-icons/md"
import BBreadCrumb from "../../components/BreadCrumb"

const index = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div className="p-5">
      <div className="flex flex-row gap-4">
        <div
          className={`scroll-to-top ${isVisible ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <span>
            <MdArrowUpward />
          </span>
        </div>
        <div className="flex-1">
          {/* <BBreadCrumb /> */}
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <div className="image-hover img-zoom-in">
                    <img
                      src={item?.firstImage}
                      alt=""
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        aspectRatio: "1",
                      }}
                    />
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p className="text-center">{item?.name}</p>
                  </p>
                  <Button
                    href={getPath("hizmetler", { id: item.id })}
                    color="gray"
                    pill
                  >
                    <p>Görüntüle</p>
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
        <div className="flex-none">
          <SideBarProcesses />
        </div>
      </div>
    </div>
  )
}
export default index
