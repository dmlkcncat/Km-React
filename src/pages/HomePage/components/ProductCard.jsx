import { Tabs, Button } from 'flowbite-react'
import { Fragment, useEffect, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { GiSteelDoor } from 'react-icons/gi'
import { GrHome } from 'react-icons/gr'
import { VscDebugContinueSmall } from 'react-icons/vsc'
import { CategoryService } from '../../../services'

const ProductCard = () => {
  const [data, setData] = useState(false)

  const fetchData = () => {
    CategoryService.getAll().then((x) => {
      setData(x.data)
      console.log(x)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const ICON = {
    'Tamamlanan Projeler': BsCheckCircle,
    'Çelik Evler': GiSteelDoor,
    'Prefabrik Evler': GrHome,
    'Devam Eden Projeler': VscDebugContinueSmall,
  }

  return (
    <div>
      <div className="grid place-items-center">
        <div className="w-full max-w-5xl">
          {Array.isArray(data) && data.length > 0 && (
            <Tabs.Group
              className="justify-center gap-2"
              aria-label="Tabs with icons"
              style="underline"
            >
              {data.map((x) => (
                <Tabs.Item
                  key={x.id}
                  active={true}
                  title={x.name}
                  icon={ICON?.[x.name] || BsCheckCircle}
                >
                  <div className="grid grid-cols-4 gap-4 p-2 mb-3">
                    {x.product.slice(0, 8).map((product) => (
                      <Fragment key={product.id}>
                        <img
                          src={product?.firstImage}
                          className="w-full aspect-square object-cover"
                        />
                      </Fragment>
                    ))}
                  </div>
                  <Button
                    className="mx-auto"
                    gradientDuoTone="purpleToBlue"
                    outline
                  >
                    <p>{x.name}i Göster</p>
                  </Button>
                </Tabs.Item>
              ))}
            </Tabs.Group>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProductCard
