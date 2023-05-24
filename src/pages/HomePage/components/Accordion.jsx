import { Accordion } from "flowbite-react"
import { HiOutlineArrowCircleDown } from "react-icons/hi"

const AAccordion = () => {
  return (
    <div>
      <Accordion arrowIcon={HiOutlineArrowCircleDown}>
        <Accordion.Panel>
          <Accordion.Title>Prefabrik Yapı Nedir?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Ön üretimli hafif çelik yapılardır. Yapıyı oluşturan bütün ürünler
              (Duvar üniteleri ,çatı ve kaplamaları, tavan kaplama ,kapılar
              pencereler ve elektrik tesisatı, iç-dış boya) fabrika ortamında
              hazırlanarak yapının kurulacağı bölgeye sevkiyatı yapılır,
              profesyonel ekipler tarafından montaj işlemi gerçekleştirilen
              yapılardır.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Prefabrik Yapılar Nasıl Yapılır?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Prefabrik yapılarda öncelikle bina planı hazırlanır. Kurulacağı
              bölgenin iklim şartlarına göre standart malzemeler belirlenir,
              standart malzemeler dışında kullanım amacı, dayanıklılığı ve
              estetik görünümü acısından opsiyonel malzeme seçimleri de
              sunulmaktadır Bina planı, kullanılacak malzemeler ve imal sürecine
              bağlı sözleşme yapılır. Firmamız tarafından taahhüt edilen sürede
              bina sevkiyatı yapılarak profesyonel montaj ekiplerimiz tarafından
              kurulumu gerçekleştirilir.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Verdiğiniz fiyatlara neler dâhildir?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              İleri kaba teslim olarak yaptığımız prefabrik binalarda şunlar
              dâhildir. Prefabrik bina malzemeleri (Duvar üniteleri, Birleşim
              elemanları, Tavan kaplaması, Tavan yalıtımı ve Çatı kaplama ,Dış
              ve İç kapıları, pencereleri, vasistasları ve camlarının takılması,
              iç ve dış cephe boyası, bina içinde elektrik ve su tesisatının
              döşenip lamba, priz, anahtarların takılıp vitrifiye armatürlerinin
              temin edilmesi) prefabrik yapının montaj işleminin yapılması.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}
export default AAccordion
