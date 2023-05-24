import { Card, Tabs } from "flowbite-react"
import { AiFillCheckCircle } from "react-icons/ai"
import { MdDashboard } from "react-icons/md"
import { HiAdjustments } from "react-icons/hi"
import { HiClipboardList } from "react-icons/hi"

const ProductCard = () => {
  return (
    <div>
      <Tabs.Group
        className="mx-auto gap-4"
        aria-label="Tabs with icons"
        style="underline"
      >
        <Tabs.Item
          active={true}
          title="Tamamlanan Projeler"
          icon={AiFillCheckCircle}
        >
          <div className="grid grid-cols-4 gap-4 p-2">
            <Card className="h-48"></Card>
            <Card className="h-48"></Card>
            <Card className="h-48"></Card>
            <Card className="h-48"></Card>
          </div>
          <div className="grid grid-cols-4 gap-4 p-2">
            <Card className="h-48"></Card>
            <Card className="h-48"></Card>
            <Card className="h-48"></Card>
            <Card className="h-48"></Card>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Çelik Evler" icon={MdDashboard}>
          <p className="text-center h-60">Dashboard content</p>
        </Tabs.Item>
        <Tabs.Item title="Prefabrik Evler" icon={HiAdjustments}>
          <p className="text-center h-60">Settings content</p>
        </Tabs.Item>
        <Tabs.Item title="Devam Eden Projeler" icon={HiClipboardList}>
          <p className="text-center h-60">Contacts content</p>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  )
}
export default ProductCard
