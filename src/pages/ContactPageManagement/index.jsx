const index = () => {
  return (
    <div className="mb-10">
      <section style={{ height: '350px', width: '100%', position: 'relative' }}>
        <img
          src="/img/aboutus.jpg"
          alt="Background Image"
          style={{
            userSelect: 'none',
            height: '350px',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          className="bg-gray-400 bg-blend-multiply absolute top-0 left-0 w-full h-full"
          style={{ opacity: 0.2 }}
        >
          <div
            className="px-4 mx-auto max-w-screen-xl text-center py-24 h-full"
            style={{ display: 'flex' }}
          ></div>
        </div>
      </section>

      <div className="flex flex-row gap-4">
        <div className="container">
          <div className="mx-auto contact-svg">
            <div className="flex flex-wrap w-full">
              <div className="h-auto text-base py-10 mx-auto">
                <div className="text-xl space-y-4">
                  <h3 className="text-2xl font-extrabold tracking-tight leading-none text-[#364e63] md:text-2xl lg:text-2xl slider-font items-center">
                    İletişim Bilgilerimiz
                  </h3>
                  <p>Ofis : HAMZAFAKILI MAH, YAŞAR TETİKER BLV NO 26, 67300 KDZ/Zonguldak</p>
                  <p>Email: info@kmmakine.com.tr</p>
                  <p>TEL : +90 372 312 02 04</p>
                </div>
              </div>
            </div>
            <div className="p-5"></div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.998890236711!2d31.44632167619719!3d41.19999777132421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c5182beeb35d7%3A0x417e3654ca80f18d!2sKM%20Makine!5e0!3m2!1str!2str!4v1695368701813!5m2!1str!2str"
            width="1500"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
export default index
