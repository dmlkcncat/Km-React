import classNames from 'classnames'
import { Fragment, useEffect, useState } from 'react'
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

  const Body = ({ id, title, description, withLine = false, ...props }) => (
    <div
      className={classNames(
        'rounded-xl border border-solid border-gray-200 shadow-md hover:shadow-2xl p-3 select-none cursor-pointer scale-100 hover:scale-105 transition-transform',
        props?.className,
        { 'with-line': withLine },
      )}
      {...props}
    >
      {/* <span className="sr-only"></span> */}
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
        {id}
      </div>
      <div className="text-xl font-semibold text-[#eeeeee]">{title}</div>
      <div className="text-md py-3 px-3 text-[#eeeeee]">{description}</div>
    </div>
  )

  const COL_COUNT = items.length

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="processes-svg px-5">
            <div className="p-6"></div>
            <div className="text-center text-4xl font-extrabold text-[#40798c] animate-bounce slider-font">
              Proje İşleyiş Süreci
            </div>
            <div className="p-5"></div>
            <div
              className="grid px-5 grid-cols-1 xl:grid-cols-5"
              // style={{ gridTemplateColumns: `repeat(${COL_COUNT}, 1fr)` }}
            >
              {items.map((item, index) => (
                <Fragment key={index}>
                  {[...Array(index)].map((item, key) => (
                    <div key={key}></div>
                  ))}
                  <div
                    className={classNames('px-5', {
                      'xl:-mt-52': index != 0,
                    })}
                  >
                    <Body
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      style={{ backgroundColor: item.hexCode }}
                      withLine={index + 1 !== COL_COUNT}
                    />
                  </div>

                  {[...Array(COL_COUNT - index - 1)].map((item, key) => (
                    <div key={key}></div>
                  ))}
                </Fragment>
              ))}
            </div>
            <div className="p-5"></div>
          </div>
        </>
      )}
    </>
  )
}
export default Processes
