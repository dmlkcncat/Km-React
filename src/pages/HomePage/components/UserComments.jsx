import { Button } from 'flowbite-react'

const UserComments = () => {
  const comments = [
    {
      id: 1,
      userName: 'Kullanıcı 1',
      createdDay: '2002-11-11',
      title: 'Şeffaflık ve doğallık',
      comments:
        ' Prefabrik ev satın aldığımdan beri hayatımın birçok yönünde büyük bir değişim yaşadım. Öncelikle, bu ev benim için güvenli ve sıcak bir sığınak oldu. Yüksek kaliteli malzemeler ve modern tasarımıyla, hem içeride hem de dışarıda kendimi rahat hissediyorum.',
    },
    {
      id: 2,
      userName: 'Kullanıcı 2',
      createdDay: '2022-10-10',
      title: 'Müşterileri ile ilgililer',
      comments:
        'Prefabrik evim, modern yaşam tarzımı mükemmel bir şekilde yansıtan bir yuva oldu. Hızlı inşası, enerji verimliliği ve özelleştirilebilir tasarımıyla beni etkiledi. Rahat, şık ve çevre dostu bir yaşam alanı sağlıyor. Prefabrik ev sahibi olmaktan son derece memnunum!',
    },
    {
      id: 3,
      userName: 'Kullanıcı 3',
      createdDay: '2022-10-10',
      title: 'Memnun kaldım',
      comments: 'Gördüğüm en güzel prefabrik evdi.',
    },
  ]

  return (
    <>
      <div className="p-10">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-[#c27803] dark:text-white">
                Deneyimlerinizi paylaşın..
              </h2>
            </div>
            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label
                  htmlFor="comment"
                  className="sr-only"
                >
                  Yorumunuz
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Bizimle ilgili deneyimlerinizi paylaşın."
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Gönder
              </Button>
            </form>
            <div></div>
            <div className="h-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-5">
                {comments.map((item, id) => (
                  <div
                    key={item.id}
                    className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500"
                  >
                    <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
                      X
                    </div>
                    <div className="mt-4">
                      <h1 className="text-lg text-gray-700 font-semibold hover:underline">
                        {item.title}
                      </h1>
                      {/* <div className="flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div> */}
                      <p className="mt-4 text-md text-gray-600">{item.comments}</p>
                      <div className="flex justify-between items-center">
                        <div className="mt-4 flex items-center space-x-4 py-6">
                          <div className="">
                            {/* <img
                            className="w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                            alt=""
                          /> */}
                          </div>
                          <div className="text-sm font-semibold">
                            {item.userName} • <span className="font-normal">{item.createdDay}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default UserComments
