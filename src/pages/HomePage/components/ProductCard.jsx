import { Card, Tabs, Button } from "flowbite-react"
import { BsCheckCircle } from "react-icons/bs"
import { GiSteelDoor } from "react-icons/gi"
import { GrHome } from "react-icons/gr"
import { VscDebugContinueSmall } from "react-icons/vsc"

const ProductCard = () => {
  return (
    <div>
      <Tabs.Group
        className="justify-center gap-2"
        aria-label="Tabs with icons"
        style="underline"
      >
        <Tabs.Item
          active={true}
          title="Tamamlanan Projeler"
          icon={BsCheckCircle}
        >
          <div className="grid grid-cols-4 gap-4 p-2">
            <img src="" className="h-48"></img>
          </div>
          <Button className="mx-auto" gradientDuoTone="greenToBlue" outline>
            <p>Tamamlanan Projeleri Göster</p>
          </Button>
        </Tabs.Item>
        <Tabs.Item title="Çelik Evler" icon={GiSteelDoor}>
          <div className="grid grid-cols-4 gap-4 p-2">
            <img src="" className="h-48"></img>
          </div>
          <Button className="mx-auto" gradientDuoTone="purpleToBlue" outline>
            <p>Çelik Evleri Göster</p>
          </Button>
        </Tabs.Item>
        <Tabs.Item title="Prefabrik Evler" icon={GrHome}>
          <div className="grid grid-cols-4 gap-4 p-2">
            <img src="" className="h-48"></img>
          </div>
          <Button className="mx-auto" gradientDuoTone="purpleToPink" outline>
            <p>Prefabrik Evleri Göster</p>
          </Button>
        </Tabs.Item>
        <Tabs.Item title="Devam Eden" icon={VscDebugContinueSmall}>
          <div className="grid grid-cols-4 gap-4 p-2">
            <img src="" className="h-48"></img>
          </div>
          <Button className="mx-auto" gradientDuoTone="pinkToOrange" outline>
            <p>Devam Eden Projeleri Göster</p>
          </Button>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  )
}
export default ProductCard
