const SocialMedia = () => {
  return (
    <section className="z-0 mx-auto px-10 relative overflow-hidden">
      <div className="-z-10 absolute flex flex-row w-full top-0 left-0">
        <div className="relative w-full pr-[360px]">
          <div className="absolute top-0 left-0 w-full h-full bg-sky-300"></div>
          <img
            src="https://img.freepik.com/free-photo/model-house-woman-s-hand-boxes-background_493343-30033.jpg?w=1060&t=st=1689938345~exp=1689938945~hmac=da76f79fce8c0f7f5cc905c7ecdce5f39249180165a45d710f3e311c404dc480"
            className="opacity-30 w-full"
            style={{ objectFit: 'inherit' }}
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="p-5"></div>
      <div className="flex flex-auto">
        <div
          className="text-4xl my-auto w-full font-extrabold animate-bounce text-blue-900"
          style={{ alignItems: 'baseline' }}
        >
          <div className="max-w-xl mx-auto">
            Hayallerinizi Prefabrik Evlerimizle Taçlandırın, Kaliteli ve Hızlı Çözümler Sunuyoruz!
            Sizi Modern ve Şık Yaşam Alanlarıyla Buluşturuyoruz, Sosyal Medyadan Takip Edin!
          </div>
        </div>
        <div className="mx-auto hover:animate-bounce">
          <a
            href="https://www.instagram.com/karbilyapicelik/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/socialmedia/karbil1.png"
              alt=""
              width={360}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
export default SocialMedia
