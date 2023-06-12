import { Card, Carousel } from "flowbite-react"

const ActionCard = () => {
    return (
        <div className="container p-4">
            <Card className="w-full h-full">
                <div className="mx-auto">
                    <div className="grid grid-cols-2 mx-auto gap-4">
                        <Card>
                            <img className="w-full h-full" style={{ width: "100%", aspectRatio: "1.5" }} src="http://karbilyapi.com/denetim/yukleme/orta/585754.jpg" alt="" />
                        </Card>
                        <span>
                            <Card className="shadow-md">
                                KB ŞÖMİNE
                                Eski zamanlarda evde şömine olması için, ya çok büyük bir salona, ya da önceden hazırlanmış bir alt yapıya ihtiyaç duyulurdu. Ancak gelişen teknoloji sayesinde, artık her eve uygun bir model tasarlanmaktadır.

                                Şömineler yakıt cinslerine göre; odunlu, gazlı, elektrikli ve bacasız olarak dörde ayrılır. Yakıt cinsi açısından odunlu şöminelerin, diğer türlere göre ısıtma oranı daha yüksektir. Ancak odunlu şömineler, belirli ölçülerde özel bir düşey bacaya ihtiyaç duyarlar. Yani odunlu şömineler, çok katlı binalar için pek uygun olmadığından tavsiye edilmemektedir.
                                Doğalgazlı veya LPG’li şömineler, hermetik baca sistemleri ile, her mekana kolayca monte edilebilir. Bu şömineler, tasarımları ve temiz olmaları yönünden tavsiye edilir. Ayrıca yakıt taşıma gibi sıkıntıları da yoktur.

                                Bacasız şömineler, elektrikli ve bio ethanol sıvı yakıtı ile çalışır. Herhangi bir baca veya tesisat donanımı gerektirmeyen bir türdür. Bacasız şömineler, ısıtma bakımından diğer türlere kıyasla oldukça zayıf kalır. Evde dekoratif yönlü bir etki yaratmak isteyenler için tavsiye edilir.

                                Siz de, bu bilgiler ile doğru şömine seçiminizi yapabilir ve evinizde konforlu bir seyir zevki yaşayabilirsiniz.
                            </Card>
                        </span>
                    </div>
                </div>
                <div className="relative w-full h-screen">
                    <Carousel slide={true} indicators={false}>
                        <div className="flex gap-2" style={{ aspectRatio: "auto" }}>
                            <img
                                className="flex-1 h-full items-center justify-center"
                                src="http://karbilyapi.com/denetim/yukleme/orta/72204.jpg"
                                alt=""
                                style={{
                                    objectFit: "cover",
                                    width: "25%"
                                }}
                            />
                            <img
                                className="flex-1 h-full items-center justify-center"
                                src="http://karbilyapi.com/denetim/yukleme/orta/28289.jpg"
                                alt=""
                                style={{
                                    objectFit: "contain",
                                    width: "25%"
                                }}
                            />
                            <img
                                className="flex-1 h-full items-center justify-center"
                                src="http://karbilyapi.com/denetim/yukleme/orta/458831.jpg"
                                alt=""
                                style={{
                                    objectFit: "contain",
                                    width: "25%"

                                }}
                            />
                            <img
                                className="flex-1 h-full items-center justify-center"
                                src="http://karbilyapi.com/denetim/yukleme/orta/342529.jpg"
                                alt=""
                                style={{
                                    objectFit: "contain",
                                    width: "25%"
                                }}
                            />
                            <img
                                className="flex-1 h-full items-center justify-center"
                                src="http://karbilyapi.com/denetim/yukleme/orta/337432.jpg"
                                alt=""
                                style={{
                                    objectFit: "contain",
                                    width: "25%"

                                }}
                            />
                        </div>
                    </Carousel>
                </div>
            </Card>
        </div>
    )
}
export default ActionCard