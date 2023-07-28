import { Loading } from '../../../components/LoadingSpinner'
import { useEffect, useState } from 'react'
import { UserCommentsService } from '../../../services'
import { dateFormat } from '../../../utils'

const UserCommentList = () => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState(false)
  useEffect(() => {
    UserCommentsService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <div className="bg-[#e2e2e2]">
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full flex items-center justify-center w-full px-20">
          <div className="grid grid-cols-3 gap-6">
            {items &&
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#364e63] max-w-md rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 select-none cursor-pointer scale-100 hover:scale-105 border-blue-300 border border-spacing-3"
                >
                  <div className="mt-4">
                    <h1 className="text-lg text-[#cccccc] font-semibold hover:underline">
                      {item.title}
                    </h1>
                    <p className="mt-4 text-md text-[#cccccc]">{item.comment}</p>
                    <div className="flex justify-between items-center">
                      <div className="mt-4 flex items-center space-x-4 py-6">
                        <div className=""></div>
                        <div className="text-sm font-semibold text-[#cccccc]">
                          {item.userName} •{' '}
                          <span className="font-normal">{dateFormat(item.createdDay)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default UserCommentList
