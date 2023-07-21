const SocialMedia = () => {
  return (
    <section className="z-0 mx-auto px-10 relative overflow-hidden">
      <div className="-z-10 absolute flex flex-row w-full top-0 left-0">
        <div className="relative w-full pr-[360px]">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600"></div>
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/91/25/12/1000_F_91251260_xemOPm4KHsX8C98eYOZkgzYjmGLhyadl.jpg"
            className="opacity-30 w-full object-contain"
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="p-5"></div>
      <div className="flex flex-auto">
        <div className="text-center text-3xl font-extrabold text-white my-auto w-full">
          <div className="max-w-lg mx-auto">
            Yepyeni Projeler ve Gelişmelerden Haberdar Olmak için Takipte Kalın. Siz Hayal Edin,Biz
            İnşa Edelim!
          </div>
        </div>
        <div className="mx-auto hover:animate-bounce">
          <img
            src="/socialmedia/karbil1.png"
            alt=""
            width={360}
          />
        </div>
      </div>
    </section>
  )
}
export default SocialMedia
