import TitleCard from "./components/TitleCard"
import { Card, Tabs } from "flowbite-react"

const index = () => {
  return (
    <div className="min-h-full">
      {/* <TitleCard /> */}

      <Card>
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

      <Tabs.Group aria-label="Pills">
        <Tabs.Item active title="Tab 1">
          <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
        </Tabs.Item>
        <Tabs.Item title="Tab 2">
          <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
        </Tabs.Item>
        <Tabs.Item title="Tab 3">
          <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
        </Tabs.Item>
        <Tabs.Item title="Tab 4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
        </Tabs.Item>
        <Tabs.Item disabled title="Tab 5">
          <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  )
}
export default index
