import { ListGroup } from 'flowbite-react'
import { getPath } from '../../../utils'
import { useEffect, useState } from 'react'
import { ProcessesService } from '../../../services'

const SideBarProcesses = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    ProcessesService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <div
      className="space-y-1 mt-2"
      style={{ position: 'initial' }}
    >
      <p className="bg-[#fafafa] text-gray-600 shadow-md p-1 rounded-md text-center font-bold">
        Hizmetlerimiz
      </p>
      {items.map((item) => (
        <ListGroup>
          <ListGroup.Item
            href={getPath('hizmetler', { id: item.id })}
            key={item?.id}
            className="shadow-md text-gray-600"
            style={{ backgroundColor: '#fafafa' }}
          >
            {item.name}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  )
}
export default SideBarProcesses
