import { useEffect, useState } from 'react'
import { FAQService } from '../../services'
import { Loading } from '../../components/LoadingSpinner'
import { Card } from 'flowbite-react'
import ScrollToTop from '../../components/ScrollToTop'

const index = () => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(false)

  useEffect(() => {
    FAQService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="px-10 p-3">
      <ScrollToTop />
      {loading ? (
        <Loading />
      ) : (
        <div className="px-6">
          <Card className="faq-svg row-span-3">
            <div className="text-center text-3xl font-extrabold text-gray-400">
              Hakkımızda Merak Edilenler
            </div>
            <section className="bg-white w-4/5 px-10 pb-8 pt-10 rounded-lg flex justify-between flex-row">
              <div className="w-2/6">
                <p className="text-xl font-semibold pr-5"></p>
              </div>
              <div className="w-3/4 space-y-2">
                {items.map((item) => (
                  <details
                    key={item.id}
                    className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-slate-200 open:bg-white duration-300"
                  >
                    <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
                      {item?.question}
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
                      <p dangerouslySetInnerHTML={{ __html: item?.answer }}></p>
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </Card>
        </div>
      )}
    </div>
  )
}
export default index
