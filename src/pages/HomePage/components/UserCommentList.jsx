import { HiUserCircle } from 'react-icons/hi'
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
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-5">
            {items &&
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-blue-200 max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 select-none cursor-pointer scale-100 hover:scale-105 border-blue-300 border border-spacing-3"
                >
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                    <HiUserCircle />
                  </div>
                  <div className="mt-4">
                    <h1 className="text-lg text-gray-700 font-semibold hover:underline">
                      {item.title}
                    </h1>
                    <p className="mt-4 text-md text-gray-600">{item.comment}</p>
                    <div className="flex justify-between items-center">
                      <div className="mt-4 flex items-center space-x-4 py-6">
                        <div className=""></div>
                        <div className="text-sm font-semibold">
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
