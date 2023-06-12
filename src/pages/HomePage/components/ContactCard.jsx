import { Button, Card, Label, TextInput, Textarea } from "flowbite-react"
import ArtAfterBefore from "./ArtAfterBefore"
import { BsMailbox, BsPerson } from "react-icons/bs"
import { FiMessageCircle } from "react-icons/fi"

const ContactCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ArtAfterBefore />
      <Card className="shadow-2xl" style={{ backgroundColor: "#f1f0ff" }}>
        <form className="flex flex-col gap-2">
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="mb-2 flex mx-auto pb-auto">
                  <BsPerson />
                  <Label
                    htmlFor="name"
                    value="Adınız Soyadınız"
                    style={{ color: "#290e7e" }}
                  />
                </div>
                <TextInput id="name" type="text" required={true} />
              </div>
              <div>
                <div className="mb-2 flex">
                  <BsMailbox />
                  <Label
                    htmlFor="email1"
                    value="Mail Adresiniz"
                    style={{ color: "#290e7e" }}
                  />
                </div>
                <TextInput id="email1" type="email1" required={true} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="mb-2 flex">
                  <FiMessageCircle />
                  <Label
                    htmlFor="telephone"
                    value="Telefon Numaranız"
                    style={{ color: "#290e7e" }}
                  />
                </div>
                <TextInput id="name" type="text" required={true} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="mb-2 flex">
                  <FiMessageCircle />
                  <Label
                    htmlFor="name"
                    value="Mesaj"
                    style={{ color: "#290e7e" }}
                  />
                </div>
                <Textarea id="name" type="text" required={true} />
              </div>
            </div>
          </div>
          <Button className="grid-col-6 mx-auto" type="submit">
            Gönder
          </Button>
        </form>
      </Card>
    </div>
  )
}
export default ContactCard
