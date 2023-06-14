import { Button, Card, Carousel } from "flowbite-react"
import { spliceIntoChunks } from "../../../utils"

const ServiceCard = () => {
  const hizmetler = [
    {
      id: 1,
      name: "Prefabrik Havuz Sistemleri",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/815246.jpg",
    },
    {
      id: 2,
      name: "KB Barbekü",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/23986.png",
    },
    {
      id: 3,
      name: "KB Şömine",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/585754.jpg",
    },
    {
      id: 4,
      name: "KB Dış Cephe Söve Kaplama",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/363891.jpg",
    },
    {
      id: 5,
      name: "KB PVC Pencere",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/498931.jpg",
    },
    {
      id: 6,
      name: "KB Mutfak Dolabı",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/524627.jpg",
    },
    {
      id: 7,
      name: "KB Laminant",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/84869.jpg",
    },
    {
      id: 8,
      name: "KB Küpeşte",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/735870.jpg",
    },
    {
      id: 9,
      name: "KB Kalebodur",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/865814.jpg",
    },
    {
      id: 10,
      name: "KB İç Dizayn",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/864196.jpg",
    },
    {
      id: 11,
      name: "KB Ferforje",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/823577.jpg",
    },
    {
      id: 12,
      name: "KB Blok Beton",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/868682.jpg",
    },
    {
      id: 13,
      name: "KB Betonarme Yapılar",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/265777.jpg",
    },
    {
      id: 14,
      name: "KB Çelik Yapı",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/97381.jpg",
    },
    {
      id: 15,
      name: "KB Amerikan Kapı",
      imgsrc: "http://karbilyapi.com/denetim/yukleme/orta/136016.jpg",
    },
  ]


  return (
    <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        {spliceIntoChunks(hizmetler, 4).map((chunk, index) => (
          <div key={index} className="grid grid-cols-4 gap-4">
            {chunk.map((item) => (
              <Card key={item.id} className="mx-auto w-full h-full">
                <img
                  className="mx-auto aspect-ratio"
                  src={item.imgsrc}
                  alt=""
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    aspectRatio: "1.8",
                  }}
                />
                <h5
                  className="text-center text-lg tracking-tight text-gray-800 dark:text-white"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {item.name}
                </h5>
                <Button className="mx-auto" gradientMonochrome="info" pill>
                  Detay
                </Button>
              </Card>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  )
}
export default ServiceCard
