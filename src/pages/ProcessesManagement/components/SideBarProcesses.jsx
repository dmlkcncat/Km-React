import { ListGroup } from "flowbite-react"
import hizmetler from "../../../data/hizmetler.json"
import { getPath } from "../../../utils"

const SideBarProcesses = () => {
    return (
        <div className="space-y-1 mt-2" style={{ position: "initial" }}>
            <p className="bg-[#fafafa] text-center">Hizmetlerimiz</p>
            {hizmetler.map((item) => (
                <ListGroup>
                    <ListGroup.Item href={getPath('hizmetler', { id: item.id })} key={item.id} className="shadow-md" style={{ backgroundColor: "#fafafa" }}>
                        {item.name}
                    </ListGroup.Item>
                </ListGroup>
            ))}
        </div>
    )
}
export default SideBarProcesses