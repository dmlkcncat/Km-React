const Slogan = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">
            Karbil Yapı ile İnşa Etmekten Daha Fazlasını Sunan Prefabrik Evler
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Karbil Yapı'nın özgün prefabrik evleri, yalnızca konforlu bir yaşam
            alanı değil, aynı zamanda kişisel tarzınızı yansıtabileceğiniz bir
            ev ortamı sunarak size benzersiz bir deneyim yaşatıyor.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/img/prefabrik.png" alt="mockup" width={"100%"} />
        </div>
      </div>
      <div className="p-5"></div>
    </section>
  )
}
export default Slogan
