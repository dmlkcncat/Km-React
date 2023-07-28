const SocialMedia = () => {
  return (
    <section className="z-0 mx-auto px-10 relative overflow-hidden">
      <div className="-z-10 absolute flex flex-row w-full top-0 left-0">
        <div className="relative w-full pr-[360px]">
          <div className="absolute top-0 left-0 w-full h-full bg-[#364e63]"></div>
          <img
            src="https://img.freepik.com/free-photo/3d-house-plans_1048-4704.jpg?w=900&t=st=1690318188~exp=1690318788~hmac=9194b8fc96d3e8d8bc61a4ef30c3d1cffe553394b118b2ce2ae9ec2a6de1b931"
            className="opacity-20 w-full"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="p-5"></div>
      <div className="flex flex-auto">
        <div
          className="text-4xl my-auto w-full font-extrabold text-[#e2e2e2]"
          style={{ alignItems: 'baseline' }}
        >
          <div className="max-w-xl mx-auto slider-font">
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
