import { Card, Tabs } from "flowbite-react"
import SideBarProcesses from "../ProcessesManagement/components/SideBarProcesses"

const index = () => {
  return (
    <div className="p-3">
      <div className="flex flex-row gap-4">
        <div className="container p-2">
          <Card className="flex-auto h-full p-2">
            <div className="mx-auto">
              <img
                src="/img/karbillogo.png"
                width={180}
                style={{ userSelect: "none" }}
              />
            </div>
            <Tabs.Group aria-label="Pills" style="pills">
              <Tabs.Item active title="Hakkımızda">
                <div>
                  <p className="justify-between">
                    Karbi̇l Yapı olarak 2006 yılından bugüne üreti̇m tecrübesi̇yle
                    190'ın üzeri̇nde projeler gerçekleşti̇ren hazır yapı
                    sektörünün öncü markalarındandır.
                  </p>
                  <p className="justify-between">
                    Karbi̇l yapı ekonomi̇k fiyatı i̇le öne çıkan, çok hızlı
                    kurulabi̇len, 4 mevsi̇m kullanıma uygun ve farklı i̇kli̇m
                    bölgeleri̇ne göre tasarlanmış çeli̇k ve prefabri̇k evler
                    üretmektedi̇r.
                  </p>
                  <p className="justify-between">
                    Karbi̇l;müşteri̇leri̇ni̇n i̇stekleri̇ çeli̇k evler ya da bağ evleri̇
                    veya kalıcı konutlar olarak talep görüyor.
                  </p>
                  <p className="justify-between">
                    Karbi̇l; kullandığı hazır ev teknoloji̇si̇ i̇le üreti̇len uzun
                    ömürlü çevre dostu evleri̇yle gelecek nesi̇llere yaşanabi̇li̇r
                    bi̇r dünya bırakmak içi̇n çalışıyoruz. Bi̇r hazır evi̇n
                    i̇steni̇len yüksek standartlarda olması, en az konfor ve
                    esteti̇k kadar önemli̇di̇r.
                  </p>
                  <p className="justify-between">
                    Evleri̇mi̇z yüksek yalıtım ve maksi̇mum enerji̇ kullanimlarına
                    göre di̇zayn edi̇lmi̇şti̇r.
                  </p>
                  <p className="justify-between">
                    Tamamında uzmanlık ve teknoloji̇ni̇n sunduğu konfor ve güveni̇
                    bulacağınız çeli̇k ve prefabri̇k evlerle mutlu bi̇r hayata
                    bi̇zlerle merhaba deyi̇n.
                  </p>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Misyonumuz">
                <div>
                  <p>
                    Mevcut durumumuzu korumakla yetinmeyip, her noktada sürekli
                    iyileşmeyi temel felsefemiz olarak belirlemeyi,
                  </p>
                  <p>
                    Alınan projeleri müşteri memnuniyetini en üst düzeyde
                    tutmak.
                  </p>
                  <p>
                    Anlayışıyla çalışmak, teknik yeterlilik, zamanında teslim,
                    dokümantasyon tutarlılığı uluslararası normlara uygunluk,
                  </p>
                  <p>
                    Verimlilik için; müşteriyi bilgilendirme, kaynakların etkin
                    ve verimli bir şekilde kullanımını,
                  </p>
                  <p>
                    Projelerin zamanında ve istenilen kalitede müşteriye
                    ulaştırmayı sağlamak.
                  </p>
                  <p>
                    Yaşam alanlarının güven, konfor, estetik ve kalite anlayışı
                    ile güzelleştirmek, doğa çevre bilinci ile insanların
                    hayallerini zirveye taşımaktır.
                  </p>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Hedeflerimiz">
                <div>
                  <span className="flex items-center">
                    <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
                    Müşteri memnuniyeti başta olmak üzere, müşterilerimize
                    projeleri tam zamanında yerine getirmek, hızlı üretim ve
                    kısa sürede kurulumu sağlamak.
                  </span>
                  <span className="flex items-center">
                    <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full mr-1.5 flex-shrink-0"></span>
                    Projelere sunduğu yüksek kalitede üretimlerini '' satış
                    sonrası servis hizmetleriyle '' desteklemek.
                  </span>
                  <span className="flex items-center">
                    <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full mr-1.5 flex-shrink-0"></span>
                    Çevre ve iş güvenliği şartlarına üst düzeyde uyum sağlamak.
                  </span>
                  <span className="flex items-center">
                    <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full mr-1.5 flex-shrink-0"></span>
                    Periyodik eğitimlerle çalışanlarına kazandırdığı uzmanlığın
                    getirdiği başarıları birlikte paylaşmak.
                  </span>
                  <span className="flex items-center">
                    <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full mr-1.5 flex-shrink-0"></span>
                    Hizmet ve ürün kalitesiyle tüketicinin birinci tercihi
                    olarak sürekliliği sağlamak.
                  </span>
                </div>
              </Tabs.Item>
              <Tabs.Item title="Neler Üretiyoruz?">
                <div>
                  <p>1- TEK KATLI ÇELİK KONSTRÜKSİYON EV</p>
                  <p>2- DUBLEKS ÇELİK KONSTRÜKSİYON EV</p>
                  <p>3- TEK KATLI PREFABRİK KONUTLAR</p>
                  <p>4- ÇİFT KATLI PREFABRİK KONUTLAR</p>
                  <p>5- TEK KATLI PREFABRİK OFİSLER</p>
                  <p>6- ÇİFT KATLI PREFABRİK OFİSLER</p>
                  <p>7- PREFABRİK ACİL YERLEŞİM EVLERİ</p>
                  <p>8- PREFABRİK SOSYAL TESİSLER</p>
                  <p>9- TEK KATLI YATAKHANELER</p>
                  <p>10- ÇİFT KATLI YATAKHANELER</p>
                  <p>11- HANGARLAR</p>
                  <p>12- KONTEYNERLER</p>
                  <p>13- KONTEYNER YATAKHANELER</p>
                  <p>14- KONTEYNER YEMEKHANELER</p>
                  <p>15- KONTEYNER OFİSLER</p>
                  <p>16- KONTEYNER PAKET EVLER</p>
                  <p>17- WC - DUŞ ÜNİTELERİ</p>
                  <p>18- YEMEKHANELER</p>
                  <p>19- KABİNLER</p>
                </div>
              </Tabs.Item>
            </Tabs.Group>
          </Card>
        </div>
        <div className="flex-none">
          <SideBarProcesses />
        </div>
      </div>
    </div>
  )
}
export default index
