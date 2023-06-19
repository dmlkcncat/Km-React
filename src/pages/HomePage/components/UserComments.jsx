import { Button } from "flowbite-react"

const UserComments = () => {
    return (
        <>
            <section className="bg-gray-100 dark:bg-gray-900 py-8 lg:py-16">
                {/* <p className="text-center font-extrabold p-10">Kullanılarımızdan Gelenler..</p> */}
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-700 dark:text-white">Yorumlar (20)</h2>
                    </div>
                    <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <label for="comment" className="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Post comment
                        </button>
                    </form>
                    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough" />Yıldız Tilbe</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">
                            Prefabrik ev satın aldığımdan beri hayatımın birçok yönünde büyük bir değişim yaşadım. Öncelikle, bu ev benim için güvenli ve sıcak bir sığınak oldu. Yüksek kaliteli malzemeler ve modern tasarımıyla, hem içeride hem de dışarıda kendimi rahat hissediyorum.
                        </p>
                    </article>
                    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                    alt="Michael Gough" />Sezen Aksu</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>


                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">
                            Prefabrik evim, modern yaşam tarzımı mükemmel bir şekilde yansıtan bir yuva oldu. Hızlı inşası, enerji verimliliği ve özelleştirilebilir tasarımıyla beni etkiledi. Rahat, şık ve çevre dostu bir yaşam alanı sağlıyor. Prefabrik ev sahibi olmaktan son derece memnunum!
                        </p>
                    </article>
                    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                    alt="Michael Gough" />Ali Ağaoğlu</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">
                            Benim yapıtlarımdan daha kaliteli.
                        </p>
                    </article>
                </div>
                <Button className="mx-auto"> Tüm yorumları görüntüle</Button>
            </section>
        </>
    )
}
export default UserComments