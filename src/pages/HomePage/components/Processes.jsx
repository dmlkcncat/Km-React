import { Timeline } from 'flowbite-react'
import { HiCalendar } from 'react-icons/hi'

const Processes = () => {
  const Head = () => (
    <div className="relative">
      <div className="absolute w-full border-b-2 border-solid border-gray-200 top-1/2 translate-y-1/2"></div>
      <span className="relative inline-block bg-blue-500 text-white p-2 rounded-full">
        <HiCalendar />
      </span>
    </div>
  )

  const Body = ({ title, body }) => (
    <div>
      <div className="text-xl font-semibold text-sky-800">{title}</div>
      <div className="text-md py-3 px-3 text-gray-600">{body}</div>
    </div>
  )

  const COL_COUNT = 5
  const stairData = ['1', '2', '3', '4', '5']

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${COL_COUNT}, 1fr)` }}
    >
      {stairData.reverse().map((item, index) => (
        <>
          {[...Array(COL_COUNT - index - 1)].map(() => (
            <div></div>
          ))}
          <div className="px-3 -mb-20">
            <Body
              title="Analiz ve Fizibilite Çalışmaları"
              body=" Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve
              fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi
              şekilde anlamanızı sağlıyoruz."
            />
          </div>
          {[...Array(index)].map(() => (
            <div></div>
          ))}
        </>
      ))}
    </div>
  )

  return (
    <div className="p-10 background-svg">
      <section className="pb-10">
        <div className="text-center text-3xl font-extrabold text-sky-900">
          Proje Sürecimiz Nasıl İşliyor?
        </div>
        <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className="w-full grid grid-cols-5">
            <div>
              <Head />
              <Body
                title="Arsa Temini"
                body="Karbil Yapı en uygun seçenekleri sizlere sunuyor ve hayalinizdeki yaşam
             alanına sahip olmak için ilk adımı doğru şekilde atmanızı sağlıyoruz."
              />
            </div>

            <div>
              <Head />
              <Body
                title="Analiz ve Fizibilite Çalışmaları"
                body=" Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve
              fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi
              şekilde anlamanızı sağlıyoruz."
              />
            </div>

            <div>
              <Head />
              <Body
                title="Tasarım ve Proje Süreçleri"
                body="Arazi yerleşiminden detaylı kat planlarına, iç mimari tasarımdan
              peyzaj tasarımına kadar her ayrıntısı sizinle birlikte
              düşünülmüş en ideal tasarımı oluşturmak için uzman kadromuz
              detaylı bir çalışma yürütüyor."
              />
            </div>

            <div>
              <Head />
              <Body
                title="Projenin Uygulanması"
                body="Her aşamasında sizlere raporlama sunduğumuz yenilikçi inşaat
              yaklaşımımızla tüm süreçlerden haberdar olduğunuz ve istediğiniz
              yerden takip edebildiğiniz şeffaf bir imalat sürecini kaliteli
              mühendislik hizmetleri ile birleştiriyoruz."
              />
            </div>

            <div>
              <Head />
              <Body
                title="Garanti Süreci"
                body="İnşaat sektöründe yaşanan en büyük sıkıntılardan birisi inşaat
              sonrası yaşanan tadilat işlemleridir. Yapmış olduğumuz tüm
              uygulamalarda sözleşme ile belirlenmiş Karbil garanti koşulları
              işletilir."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Processes
