import { Card, Timeline } from 'flowbite-react'
import { HiCalendar } from 'react-icons/hi'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { ProjectStepsService } from '../../../services'
import { Loading } from '../../../components/LoadingSpinner'

const Processes = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    ProjectStepsService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  const Head = () => (
    <div className="relative">
      <div className="absolute w-full border-b-2 border-solid border-gray-200 top-1/2 translate-y-1/2"></div>
      <span className="relative inline-block bg-blue-500 text-white p-2 rounded-full">
        <HiCalendar />
      </span>
    </div>
  )

  const Body = ({ id, title, description, ...props }) => (
    <div
      className={classNames(
        'bg-white rounded-xl border border-solid border-gray-200 shadow-md hover:shadow-2xl p-3 select-none cursor-pointer scale-100 hover:scale-105 transition-transform',
        props?.className,
      )}
      {...props}
    >
      {/* <span className="sr-only"></span> */}
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
        {id}
      </div>
      <div className="text-xl font-semibold text-sky-800">{title}</div>
      <div className="text-md py-3 px-3 text-gray-600">{description}</div>
    </div>
  )

  // const stairData = [
  //   {
  //     id: 1,
  //     title: 'Analiz ve Fizibilite Çalışmaları',
  //     body: 'Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi şekilde anlamanızı sağlıyoruz.',
  //     color: '#ecce60',
  //   },
  //   {
  //     id: 2,
  //     title: 'Analiz ve Fizibilite Çalışmaları',
  //     body: 'Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi şekilde anlamanızı sağlıyoruz.',
  //     color: '#fcdc6e',
  //   },
  //   {
  //     id: 3,
  //     title: 'Analiz ve Fizibilite Çalışmaları',
  //     body: 'Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi şekilde anlamanızı sağlıyoruz.',
  //     color: '#ffeb7c',
  //   },
  //   {
  //     id: 4,
  //     title: 'Analiz ve Fizibilite Çalışmaları',
  //     body: 'Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi şekilde anlamanızı sağlıyoruz.',
  //     color: '#fff98a',
  //   },
  //   {
  //     id: 5,
  //     title: 'Analiz ve Fizibilite Çalışmaları',
  //     body: 'Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi şekilde anlamanızı sağlıyoruz.',
  //     color: '#ffff98',
  //   },
  // ]

  const COL_COUNT = items.length

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-center text-4xl font-extrabold colorful-text-animation bg-white mt-5">
            Proje İşleyiş Süreci
          </div>
          <div
            className="grid bg-white px-5"
            style={{ gridTemplateColumns: `repeat(${COL_COUNT}, 1fr)` }}
          >
            {items.reverse().map((item, index) => (
              <>
                {[...Array(COL_COUNT - index - 1)].map((item, key) => (
                  <div key={key}></div>
                ))}
                <div
                  className={classNames('px-5', {
                    '-mt-52': index != 0,
                  })}
                >
                  <Body
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    style={{ backgroundColor: item.hexCode }}
                  />
                </div>
                {[...Array(index)].map((item, key) => (
                  <div key={key}></div>
                ))}
              </>
            ))}
          </div>
        </>
      )}
    </>
  )

  // return (
  //   <div className="p-10 background-svg">
  //     <section className="pb-10">
  //       <div className="text-center text-3xl font-extrabold text-sky-900">
  //         Proje Sürecimiz Nasıl İşliyor?
  //       </div>
  //       <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
  //         <div className="w-full grid grid-cols-5">
  //           <div>
  //             <Head />
  //             <Body
  //               title="Arsa Temini"
  //               body="Karbil Yapı en uygun seçenekleri sizlere sunuyor ve hayalinizdeki yaşam
  //            alanına sahip olmak için ilk adımı doğru şekilde atmanızı sağlıyoruz."
  //             />
  //           </div>

  //           <div>
  //             <Head />
  //             <Body
  //               title="Analiz ve Fizibilite Çalışmaları"
  //               body=" Tüm süreçleriniz başlamadan önce sunmuş olduğumuz analiz ve
  //             fizibilite hizmetleri sayesinde arazinizin potansiyelini en iyi
  //             şekilde anlamanızı sağlıyoruz."
  //             />
  //           </div>

  //           <div>
  //             <Head />
  //             <Body
  //               title="Tasarım ve Proje Süreçleri"
  //               body="Arazi yerleşiminden detaylı kat planlarına, iç mimari tasarımdan
  //             peyzaj tasarımına kadar her ayrıntısı sizinle birlikte
  //             düşünülmüş en ideal tasarımı oluşturmak için uzman kadromuz
  //             detaylı bir çalışma yürütüyor."
  //             />
  //           </div>

  //           <div>
  //             <Head />
  //             <Body
  //               title="Projenin Uygulanması"
  //               body="Her aşamasında sizlere raporlama sunduğumuz yenilikçi inşaat
  //             yaklaşımımızla tüm süreçlerden haberdar olduğunuz ve istediğiniz
  //             yerden takip edebildiğiniz şeffaf bir imalat sürecini kaliteli
  //             mühendislik hizmetleri ile birleştiriyoruz."
  //             />
  //           </div>

  //           <div>
  //             <Head />
  //             <Body
  //               title="Garanti Süreci"
  //               body="İnşaat sektöründe yaşanan en büyük sıkıntılardan birisi inşaat
  //             sonrası yaşanan tadilat işlemleridir. Yapmış olduğumuz tüm
  //             uygulamalarda sözleşme ile belirlenmiş Karbil garanti koşulları
  //             işletilir."
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // )
}
export default Processes
