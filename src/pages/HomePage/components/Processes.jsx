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

  const Body = ({ id, title, description, ...props }) => (
    <div
      className={classNames(
        'rounded-xl border border-solid border-gray-200 shadow-md hover:shadow-2xl p-3 select-none cursor-pointer scale-100 hover:scale-105 transition-transform',
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

  const COL_COUNT = items.length

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-center text-4xl font-extrabold colorful-text-animation bg-sky-100">
            Proje İşleyiş Süreci
          </div>
          <div className="p-5"></div>
          <div
            className="grid bg-sky-100 px-5"
            style={{ gridTemplateColumns: `repeat(${COL_COUNT}, 1fr)` }}
          >
            {items.map((item, index) => (
              <Fragment key={index}>
                {[...Array(index)].map((item, key) => (
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

                {[...Array(COL_COUNT - index - 1)].map((item, key) => (
                  <div key={key}></div>
                ))}
              </Fragment>
            ))}
          </div>
        </>
      )}
    </>
  )
}
export default Processes
