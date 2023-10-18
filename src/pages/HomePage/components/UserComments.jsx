import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import { UserCommentsService } from '../../../services'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { CommentSchema } from '../../../validations/CommentSchema'
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
      <div className="bg-[#d2dce4] comments-svg">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <section>
          <div className="py-4 px-16 mx-auto max-w-screen-xl text-center lg:py-16 space-y-5">
            <div className="text-center text-4xl mx-auto font-extrabold text-[#364e63] slider-font">
              Bizimle İletişime Geçin..
            </div>
            <form
              className="mb-6 mx-auto space-y-3 max-w-lg m-auto"
              onSubmit={formik.handleSubmit}
              ref={formRef}
            >
              <div className="space-y-5 py-2 px-4 mb-4 rounded-lg rounded-t-lg">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="mb-2 block text-start">
                      <Label
                        htmlFor="text"
                        value="Ad Soyad"
                        style={{ color: '#364e63' }}
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
                    {errorMessage('title')}
                  </div>

                  <div>
                    <div className="mb-2 block text-start">
                      <Label
                        htmlFor="text"
                        value="Mesaj Konusu"
                        style={{ color: '#364e63' }}
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
                    {errorMessage('userName')}
                  </div>
                </div>

                <div
                  className="text-start"
                  id="textarea"
                >
                  <div className="mb-2 block">
                    <Label
                      htmlFor="comment"
                      value="Mesaj"
                      style={{ color: '#364e63' }}
                    />
                  </div>
                  <Textarea
                    id="comment"
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
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg focus:ring-4"
                style={{ backgroundColor: '#364e63' }}
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
          </div>
        </section>
      </div>
    </>
  )
}
export default UserComments
