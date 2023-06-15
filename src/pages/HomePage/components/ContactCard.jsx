import { Button, Card, Label, TextInput, Textarea } from "flowbite-react"
import ArtAfterBefore from "./ArtAfterBefore"
import { BsMailbox, BsPerson } from "react-icons/bs"
import { FiMessageCircle } from "react-icons/fi"

const ContactCard = () => {
  return (
    <div className="flex gap-2">
      <Card className="mx-auto w-full">
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <form className="flex flex-col gap-2 w-full">
            <div>
              <div className="grid grid-cols-3 gap-3 w-full">
                <div>
                  <div className="mb-2 flex mx-auto items-center gap-1">
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
                  <div className="mb-2 flex items-center gap-1">
                    <BsMailbox />
                    <Label
                      htmlFor="email1"
                      value="Mail Adresiniz"
                      style={{ color: "#290e7e" }}
                    />
                  </div>
                  <TextInput id="email1" type="email1" required={true} />
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-1">
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
                <div className="mb-2 flex items-center gap-1">
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
            <div className="flex justify-center">
              <Button
                className="max-w-sm"
                gradientDuoTone="greenToBlue"
                outline
              >
                <p>
                  Gönder
                </p>
              </Button>
            </div>

          </form>
        </div>
      </Card>
    </div>
  )
}
export default ContactCard
