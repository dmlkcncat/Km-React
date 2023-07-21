import { Accordion } from 'flowbite-react'

const SSS = () => {
  return (
    <div className="bg-white p-5">
      <div className="text-center text-4xl font-extrabold text-slate-400 bg-white mt-5 p-5">
        Sıkça Sorulan Sorular
      </div>
      {/* <div className="max-w-xl w-full mx-auto">
        <Accordion className="bg-white">
          <Accordion.Panel>
            <Accordion.Title>1. Çelik konstrüksiyon ev uzun ömürlü mü?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  Cevap: Çelik konstrüksiyon ev oldukça uzun ömürlüdür. "Çelik gibi sağlam" deyimini
                  bile göz önüne aldığınızda bu evlerin ömrü hakkında bilgi sahibi olabilirsiniz.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>2.Çelik konstüksiyon ev depreme dayanıklı mı?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  Cevap: Çelik konstrüksiyon evler en çok depreme dayanıklı olmaları ile bilinir.
                  Çeliğin esneyen yapısından ötürü deprem anında ev sarsıntıya karşı dayanıklı olur.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>3.Çelik konstrüksiyon ev ısınır mı?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  Cevap: Çelik konstrüksiyon evin ısınması konusunda endişesi olanlar rahat olsun!
                  Çünkü çelik konstrüksiyon ev çok soğuk olmayan bir bölgede küçük bir sobayla bile
                  ısınabilir. Ama evin yer aldığı bölge çok soğuksa ekstra yalıtımlar yapılmalı.
                  Bunun dışında çelik konstrüksiyon evi satın alacağınız firmanın yalıtım için hangi
                  malzemeleri kullanacağına da çok dikkat etmeniz gerekir.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>4. Çelik konstrüksiyon evlerde ses yalıtımı nasıl?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  Cevap: Çelik konstrüksiyon evlerde ses yalıtımı iyi yapılmadığı takdirde
                  sorunların yaşanması mümkün. Özellikle iki katlı evlerde üst katta her ses aşağıya
                  gidebilir. Rüzgarlı havada da evin içinde uğultu eksik olmaz. Bunun önüne geçmek
                  için çözümler var ama firmalar ekstra yalıtım için ücret talep ediyor.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>5. Çelik konstrüksiyon evler her iklime uygun mu?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <p>
                  Cevap: Çelik konstrüksiyon evler genel olarak her iklime uygun. Özellikle hafif ve
                  ağır çelik karışımı şekilde seçtiğiniz çelik konstrüksiyon ev bu konuda
                  endişelerinizi sonlandırır.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div> */}
      <div className="max-w-3xl w-full mx-auto">
        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-slate-200 open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
            1. Çelik konstrüksiyon ev uzun ömürlü mü?
            <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p className="text-xs pt-3">
            <p>
              Cevap: Çelik konstrüksiyon ev oldukça uzun ömürlüdür. "Çelik gibi sağlam" deyimini
              bile göz önüne aldığınızda bu evlerin ömrü hakkında bilgi sahibi olabilirsiniz.
            </p>
          </p>
        </details>
        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-slate-200 open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
            1. Çelik konstrüksiyon ev uzun ömürlü mü?
            <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p className="text-xs pt-3">
            <p>
              Cevap: Çelik konstrüksiyon ev oldukça uzun ömürlüdür. "Çelik gibi sağlam" deyimini
              bile göz önüne aldığınızda bu evlerin ömrü hakkında bilgi sahibi olabilirsiniz.
            </p>
          </p>
        </details>
        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-slate-200 open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
            1. Çelik konstrüksiyon ev uzun ömürlü mü?
            <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p className="text-xs pt-3">
            <p>
              Cevap: Çelik konstrüksiyon ev oldukça uzun ömürlüdür. "Çelik gibi sağlam" deyimini
              bile göz önüne aldığınızda bu evlerin ömrü hakkında bilgi sahibi olabilirsiniz.
            </p>
          </p>
        </details>
        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-slate-200 open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
            1. Çelik konstrüksiyon ev uzun ömürlü mü?
            <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p className="text-xs pt-3">
            <p>
              Cevap: Çelik konstrüksiyon ev oldukça uzun ömürlüdür. "Çelik gibi sağlam" deyimini
              bile göz önüne aldığınızda bu evlerin ömrü hakkında bilgi sahibi olabilirsiniz.
            </p>
          </p>
        </details>
        <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-slate-200 open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
            1. Çelik konstrüksiyon ev uzun ömürlü mü?
            <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p className="text-xs pt-3">
            <p>
              Cevap: Çelik konstrüksiyon ev oldukça uzun ömürlüdür. "Çelik gibi sağlam" deyimini
              bile göz önüne aldığınızda bu evlerin ömrü hakkında bilgi sahibi olabilirsiniz.
            </p>
          </p>
        </details>
      </div>
    </div>
  )
}
export default SSS
