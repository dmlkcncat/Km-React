import { Button, Card, Label, TextInput, Textarea } from "flowbite-react"

const ContactCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <img
          className="h-60 items-center"
          src="https://fakeimg.pl/1920x1080"
          alt=""
        />
      </Card>
      <Card>
        <form className="flex flex-col gap-2">
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Adınız Soyadınız" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Adınız soyadınızı giriniz."
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Mail Adresi" />
                </div>
                <TextInput
                  id="email1"
                  type="email1"
                  placeholder="birisi@birisi.com"
                  required={true}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Mesaj" />
                </div>
                <Textarea
                  id="name"
                  type="text"
                  placeholder="Mesajınızı giriniz."
                  required={true}
                />
              </div>
            </div>
          </div>
          <Button type="submit">Gönder</Button>
        </form>
      </Card>
    </div>
  )
}
export default ContactCard
