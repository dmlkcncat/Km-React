import { Button, Card, Checkbox, Label, Select, TextInput } from 'flowbite-react'
import { useState, useEffect } from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import ScrollToTop from '../../components/ScrollToTop'
import { ProductService } from '../../services'
import { getPath } from '../../utils'

const Product = () => {
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
    <div className="bg-[#f2f2f2] pb-5">
      <section
        className="bg-center bg-cover bg-no-repeat bg-[url('https://z500.com/wp-content/uploads/2014/03/3.jpg')] bg-gray-400 bg-blend-multiply"
        style={{ height: '350px', width: '100%' }}
      >
        <div
          className="px-4 mx-auto max-w-screen-xl text-center py-24 h-full"
          style={{ display: 'flex' }}
        >
          <h1
            className="w-full text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl slider-font items-center"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            Projeler
          </h1>
        </div>
      </section>

      <div className="flex flex-row gap-4 mt-5">
        <ScrollToTop />
        <div className="flex-1 px-10">
          <div className="text-left text-4xl font-extrabold slider-font p-5 text-[#364e63]">
            Projelerimiz
            <div className="divider"></div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {loading ? (
              <div>loading ....</div>
            ) : error ? (
              <div>hata ....</div>
            ) : (
              products.map((item) => (
                <Card
                  key={item.id}
                  className="max-w-md companies-card bg-slate-50"
                  // style={{ backgroundColor: '#1d5889' }}
                >
                  <h5
                    className="mb-3 text-center font-semibold text-gray-700 dark:text-white lg:text-xl"
                    style={{ aspectRatio: 3.8 }}
                  >
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
                    gradientDuoTone="cyanToBlue"
                    outline
                    href={item?.path}
                    target="_blank"
                  >
                    <p>Ürünü Görüntüle</p>
                  </Button>
                </Card>
              ))
            )}
          </div>
        </div>
        <div className="flex-shrink-0 space-y-2 px-4">
          <div className="text-center text-4xl font-extrabold slider-font p-5 text-[#364e63]">
            Filtrele
            <div className="divider"></div>
          </div>
          <Card className="max-w-md">
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
