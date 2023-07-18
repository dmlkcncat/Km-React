import { Button, Card, Checkbox, Label, Select, TextInput } from 'flowbite-react'
import { useState, useEffect } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import ScrollToTop from '../../components/ScrollToTop'
import { ProductService } from '../../services'

const Product = () => {
  const urun = [
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'ORGANİZE - 257 M2 - OFİS BİNASI',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/297515.jpg',
    },
    {
      urunadi: 'HAMZAVAKIFLI - 141 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/523132.jpg',
    },
    {
      urunadi: 'KEŞKEK - 90 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/775878.jpg',
    },
    {
      urunadi: 'DEVREK - 105 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/951141.jpg',
    },
    {
      urunadi: 'BARTIN - 101 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/838928.jpg',
    },
    {
      urunadi: 'KOZLU - 73 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'SEYFETLER - 89 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/692596.jpg',
    },
    {
      urunadi: 'ÇAYLIOĞLU - 92 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/402343.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'ORGANİZE - 257 M2 - OFİS BİNASI',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/297515.jpg',
    },
    {
      urunadi: 'HAMZAVAKIFLI - 141 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/523132.jpg',
    },
    {
      urunadi: 'KEŞKEK - 90 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/775878.jpg',
    },
    {
      urunadi: 'DEVREK - 105 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/951141.jpg',
    },
    {
      urunadi: 'BARTIN - 101 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/838928.jpg',
    },
    {
      urunadi: 'KOZLU - 73 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'SEYFETLER - 89 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/692596.jpg',
    },
    {
      urunadi: 'ÇAYLIOĞLU - 92 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/402343.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
    {
      urunadi: 'KIZILCAPINAR - 113 M2',
      img: 'http://karbilyapi.com/denetim/yukleme/orta/714508.jpg',
    },
  ]

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])

  const fetchData = () => {
    setLoading(true)
    setError(false)

    ProductService.getAll()
      .then((response) => {
        setProducts(response?.data || [])
        console.log(response?.data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="p-5">
      <div className="flex flex-row gap-4">
        <ScrollToTop />
        <Card className="flex-1 px-10">
          <p className="p-2">Ürünler</p>
          <div className="grid grid-cols-3 gap-3">
            {loading ? (
              <div>loading ....</div>
            ) : error ? (
              <div>hata ....</div>
            ) : (
              products.map((item) => (
                <Card
                  key={item.id}
                  className="max-w-md companies-card"
                >
                  <h5 className="mb-3 text-center font-semibold text-gray-700 dark:text-white lg:text-xl">
                    {item.name}
                  </h5>
                  <div className="image-hover img-zoom-in">
                    <img
                      src={item?.firstImage}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        aspectRatio: '1',
                      }}
                      alt=""
                    />
                  </div>
                  <Button
                    gradientDuoTone="greenToBlue"
                    outline
                  >
                    <p>Ürünü Görüntüle</p>
                  </Button>
                </Card>
              ))
            )}
          </div>
        </Card>
        <div className="flex-2 space-y-2">
          <p className="p-1">Filtrele</p>
          <Card className="max-w-md">
            {/** Room Count */}
            <div
              className="max-w-xs"
              id="select"
            >
              <div className="mb-2 block">
                <Label
                  htmlFor="countries"
                  value="Oda Sayısı"
                />
              </div>
              <Select
                id="countries"
                required
              >
                <option>1</option>
                <option>2</option>
                <option>2</option>
                <option>4</option>
              </Select>
            </div>
            {/** Option Count */}
            <div>Kat sayısı</div>
            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value="0"
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tek Katlı
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value="1"
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Çift Katlı
                </label>
              </div>
            </div>
            {/** Garaj */}
            <div>Garaj</div>
            <div className="flex items-center gap-2">
              <Checkbox
                defaultChecked
                id="accept"
              />
              <Label
                className="flex"
                htmlFor="agree"
              >
                <p>Var</p>
              </Label>
            </div>
            {/** Plot Square */}
            <div>Arsa Büyüklüğü</div>
            <div className="flex gap-1">
              <TextInput
                className="max-w-[6rem]"
                color="gray"
                id="input-gray"
                placeholder="min"
                required
              />
              <TextInput
                className="max-w-[6rem]"
                color="gray"
                id="input-gray"
                placeholder="max"
                required
              />
            </div>
            {/** Home Square Meters */}
            <div>Ev Metrekare</div>
            <div>
              <div className="flex gap-1">
                <TextInput
                  className="max-w-[6rem]"
                  color="gray"
                  id="input-gray"
                  placeholder="min"
                  required
                />
                <TextInput
                  className="max-w-[6rem]"
                  color="gray"
                  id="input-gray"
                  placeholder="max"
                  required
                />
              </div>
            </div>
            <Button
              gradientDuoTone="cyanToBlue"
              outline
            >
              <p>Devam</p>
              <span>
                <HiOutlineArrowRight className="h-6 w-6 ml-1" />
              </span>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default Product
