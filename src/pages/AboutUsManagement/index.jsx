import { Card } from "flowbite-react"
import SideBarProcesses from "../ProcessesManagement/components/SideBarProcesses"

const index = () => {
  return (
    <div className="p-3">
      <div className="flex flex-row gap-4">
        <div className="container p-2">
          <p>Hakkımızda</p>
          <div className="px-10 py-5">
            <Card className="w-full h-100">
              KARBİL YAPI OLARAK ; 2006 YILINDAN BUGÜNE ÜRETİM TECRÜBESİYLE 190 'IN
              ÜZERİNDE PROJELER GERÇEKLEŞTİREN HAZIR YAPI SEKTÖRÜNÜN ÖNCÜ
              MARKALARINDANDIR. KARBİL YAPI EKONOMİK FİYATI İLE ÖNE ÇIKAN, ÇOK HIZLI
              KURULABİLEN, 4 MEVSİM KULLANIMA UYGUN VE FARKLI İKLİM BÖLGELERİNE GÖRE
              TASARLANMIŞ ÇELİK VE PREFABRİK EVLER ÜRETMEKTEDİR. KARBİL ;
              MÜŞTERİLERİNİN İSTEKLERİ ÇELİK EVLER YADA BAĞ EVLERİ VEYA KALICI
              KONUTLAR OLARAK TALEP GÖRÜYOR. KARBİL ; KULLANDIĞI HAZIR EV TEKNOLOJİSİ
              İLE ÜRETİLEN UZUN ÖMÜRLÜ ÇEVRE DOSTU EVLERİYLE GELECEK NESİLLERE
              YAŞANABİLİR BİR DÜNYA BIRAKMAK İÇİN ÇALIŞIYORUZ. BİR HAZIR EVİN
              İSTENİLEN YÜKSEK STANDARTLARDA OLMASI, EN AZ KONFOR VE ESTETİK KADAR
              ÖNEMLİDİR. EVLERİMİZ YÜKSEK YALITIM VE MAKSİMUM ENERJİ KULLANIMLARINA
              GÖRE DİZAYN EDİLMİŞTİR. TAMAMINDA UZMANLIK VE TEKNOLOJİNİN SUNDUĞU
              KONFOR VE GÜVENİ BULACAĞINIZ ÇELİK VE PREFABRİK EVLERLE MUTLU BİR HAYATA
              BİZLERLE MERHABA DEYİN.
            </Card>
          </div>

          <div className="flex flex-row px-10 gap-3">
            <Card className="flex-1">
              <div className="flex flex-col items-center pb-10">
                <img
                  alt="Bonnie image"
                  className="mb-3 rounded-full shadow-lg"
                  height="96"
                  src="https://www.flowbite-react.com/images/people/profile-picture-3.jpg"
                  width="96"
                />
                <p className="p-5">Serap Karadeniz</p>
                <p>Projelerimizi zamanında teslim ediyoruz. Kaliteden ödün vermeksizin, sektörde öncü firmamızın tecrübe ve bilgisi ile , kalite standartları ve uzman personelimizle evinize daima tam zamanında girersiniz.
                  Ek Hizmetler Sunuyoruz.

                  Yapınızın kaba kısmı tamamlandıktan sonra gerekli olan , laminant, döşeme, Şömine gibi iç yapı ihtiyaçları yani sıra, Söbe taş kaplama vb dış yapı ihtiyaçlarınızı da karbil yapı aracılığı ile tek kanaldan karşılayabilirsiniz..
                </p>

              </div>
            </Card>
            <Card className="flex-1">
              <div className="flex flex-col items-center pb-10">
                <img
                  alt="Bonnie image"
                  className="mb-3 rounded-full shadow-lg"
                  height="96"
                  src="https://www.flowbite-react.com/images/people/profile-picture-3.jpg"
                  width="96"
                />
                <p className="p-5">Akın Karadeniz</p>
                <p>" En yeni teknoloji ve uygulamaları sizin için takip ediyoruz , sürekli kendimizi yenileyerek daima daha iyisini siz değerli müşterilerimiz için gerçekleştiriyoruz."</p>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex-none">
          <SideBarProcesses />
        </div>
      </div>

    </div>
  )
}
export default index
