const Product = () => {
  return (
    <>
      <section className="bg-slate-100">
        <div className="p-3"></div>
        <div className="text-center text-4xl font-extrabold text-teal-900">
          Son Projelerimiz
        </div>
        <div className="p-6"></div>
        <div>
          <section className="cards-animation items-center mx-auto">
            <article className="card-animation card--1">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">
                  220 M2 Çelik Konstrüksiyon
                </span>
                <h3 className="card__title"></h3>
                <span className="card__by">Düzce</span>
              </div>
            </article>

            <article className="card-animation card--2">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">
                  253 M2 DUBLEKS Çelik Konstrüksiyon
                </span>
                <h3 className="card__title"></h3>
                <span className="card__by">Ereğli</span>
              </div>
            </article>

            <article className="card-animation card--3">
              <div className="card__img"></div>
              <a className="card_link">
                <div className="card__img--hover"></div>
              </a>
              <div className="card__info">
                <span className="card__category">
                  121 M2 DUBLEKS Çelik Konstrüksiyon
                </span>
                <h3 className="card__title"></h3>
                <span className="card__by">Ereğli</span>
              </div>
            </article>
          </section>
          <a href="">
            <div className="text-center py-6 text-teal-900">
              Tüm Projeleri Görüntüle
            </div>
          </a>
        </div>
        <div className="p-10"></div>
      </section>
    </>
  )
}
export default Product
