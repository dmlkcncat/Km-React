import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import { UserCommentsService } from '../../../services'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { CommentSchema } from '../../../validations/CommentSchema'
import UserCommentList from './UserCommentList'
import { Loading } from '../../../components/LoadingSpinner'
import { toast, Toaster } from 'react-hot-toast'

const UserComments = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef()
  const [items, setItems] = useState(false)

  useEffect(() => {
    UserCommentsService.getAll().then((res) => {
      setItems(res.data)
      setLoading(false)
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      userName: '',
      title: '',
      comment: '',
      active: 'false',
    },
    validationSchema: CommentSchema,
    onSubmit: (values) => {
      UserCommentsService.add({
        UserName: values.userName,
        Title: values.title,
        Comment: values.comment,
        Active: values.active,
      })
        .then((response) => {
          console.log('response :>> ', response)

          formik.resetForm()

          formRef.current.querySelector('input').focus()

          toast.success('Formunuz iletilmiştir!')
        })
        .catch((error) => {
          console.error(error)
          formRef.current.querySelector('input').select()
          formRef.current.querySelector('input').focus()
        })
    },
  })

  const errorMessage = useCallback(
    (key) => {
      return (
        <>
          {formik.touched?.[key] && formik.errors?.[key] && (
            <div className="text-xs text-center text-danger">{formik.errors?.[key]}</div>
          )}
        </>
      )
    },
    [formik],
  )

  return (
    <>
      <div className="p-10 bg-blue-100">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />

        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-blue-900 dark:text-white">
                Bizimle deneyimlerinizi paylaşın..
              </h2>
            </div>
            <form
              className="mb-6 mx-auto"
              onSubmit={formik.handleSubmit}
              ref={formRef}
            >
              <div className="space-y-2 py-2 px-4 mb-4 rounded-lg rounded-t-lg">
                <div>
                  <div className="mb-2 block text-start">
                    <Label
                      htmlFor="text"
                      value="Adınız Soyadınız"
                    />
                  </div>
                  <TextInput
                    id="text"
                    required
                    type="text"
                    name="title"
                    feedback={formik.errors.title}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {errorMessage('title')}

                <div>
                  <div className="mb-2 block text-start">
                    <Label
                      htmlFor="text"
                      value="Adınız Soyadınız"
                    />
                  </div>
                  <TextInput
                    id="text"
                    required
                    type="text"
                    name="userName"
                    feedback={formik.errors.userName}
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {errorMessage('userName')}

                <div
                  className="text-start"
                  id="textarea"
                >
                  <div className="mb-2 block">
                    <Label
                      htmlFor="comment"
                      value="Your message"
                    />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                    name="comment"
                    feedback={formik.errors.comment}
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {errorMessage('comment')}
                </div>
              </div>
              <Button
                disabled={loading}
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                {loading && (
                  <Loading
                    size="sm"
                    className="me-3"
                  />
                )}
                <i
                  className="fa fa-paper-plane"
                  aria-hidden="true"
                ></i>{' '}
                Gönder
              </Button>
            </form>
            <div></div>
            {/* {loading ? (
              <Loading />
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-5">
                  {items.map((item) => (
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
            )} */}
            <UserCommentList />
          </div>
        </section>
      </div>
    </>
  )
}
export default UserComments
