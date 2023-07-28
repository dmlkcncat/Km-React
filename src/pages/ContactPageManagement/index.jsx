const index = () => {
  return (
    <div className="mb-10">
      <section
        className="bg-center bg-no-repeat bg-[url('/img/aboutus.jpg')] bg-gray-400 bg-blend-multiply"
        style={{ height: '350px', width: '100%' }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl slider-font items-center">
            İletişim Bilgilerimiz
          </h1>
        </div>
      </section>
      <div className="flex flex-row gap-4">
        <div className="container">
          <div className="mx-auto contact-svg">
            <div className="p-5"></div>
            <div className="flex flex-wrap w-full">
              <div className="h-auto text-base py-10 mx-auto">
                <div className="text-xl space-y-4">
                  <h3 className="text-2xl font-extrabold tracking-tight leading-none text-[#364e63] md:text-2xl lg:text-2xl slider-font items-center">
                    İletişim Bilgilerimiz
                  </h3>
                  <p>Ofis : Ören Mah. Hüseyin İbrahim İzmirli Sok. No:159 KDZ EREĞLİ /ZONGULDAK</p>
                  <p>Email: info@karbilyapi.com</p>
                  <p className="text-[#364e63] text-2xl">Telefonlar</p>
                  <p>TEL : 0 372 322 74 56 GSM : 0 532 327 05 00 GSM : 0 533 553 75 07</p>
                </div>
              </div>
            </div>
            <div className="p-5"></div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.330407879471!2d31.41768497587233!3d41.279913002655086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c45ea8bd708d7%3A0xd786d26e590511c5!2sKARB%C4%B0L%20YAPI!5e0!3m2!1str!2str!4v1686659757378!5m2!1str!2str"
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
