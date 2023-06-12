import { Card, Timeline } from "flowbite-react"
import { GoLocation } from "react-icons/go"
import { BsSearch } from "react-icons/bs"
import { GiPencilRuler } from "react-icons/gi"
import { TbHomeCheck, TbHomeEdit } from "react-icons/tb"

const Processes = () => {
  return (
    <div style={{ width: "max content"}}>
      <Timeline horizontal>
        <Timeline.Item>
          <Timeline.Point icon={GoLocation} />
          <Timeline.Content>
            <Timeline.Body>
              <Card
                className="mx-auto w-60 button1"
                style={{ backgroundColor: "#000" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae leo quis sapien semper bibendum sed at urna. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Nullam et aliquam tortor, a bibendum quam.
              </Card>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={BsSearch} />
          <Timeline.Content>
            <Timeline.Body>
              <Card
                className="mx-auto w-60 button1"
                style={{ backgroundColor: "#000" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae leo quis sapien semper bibendum sed at urna. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Nullam et aliquam tortor, a bibendum quam. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
                leo quis sapien semper bibendum sed at urna. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Nullam et aliquam tortor, a bibendum quam.
              </Card>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={GiPencilRuler} />
          <Timeline.Content>
            <Timeline.Body>
              <Card
                className="mx-auto w-60 button1"
                style={{ backgroundColor: "#000" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae leo quis sapien semper bibendum sed at urna. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Nullam et aliquam tortor, a bibendum quam.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
                leo quis sapien semper bibendum sed at urna.
              </Card>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={TbHomeEdit} />
          <Timeline.Content>
            <Timeline.Body>
              <Card
                className="mx-auto w-60 button1"
                style={{ backgroundColor: "#000" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae leo quis sapien semper bibendum sed at urna. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Nullam et aliquam tortor, a bibendum quam.
              </Card>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={TbHomeCheck} />
          <Timeline.Content>
            <Timeline.Body>
              <Card
                className="mx-auto w-60 button1"
                style={{ backgroundColor: "#000" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vitae leo quis sapien semper bibendum sed at urna. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia curae; Nullam et aliquam tortor, a bibendum quam. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna.
              </Card>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}
export default Processes
