import { Card } from "flowbite-react"

const ContactCard = () => {
    return (
        <Card className="flex flex-wrap">
            <div className="h-auto max-w-xs">
                <Card>
                    <p>İletişim Bilgilerimiz</p>
                    <p>
                        Ofis
                        Ören Mah. Hüseyin İbrahim İzmirli Sok.
                        No:159 KDZ EREĞLİ /ZONGULDAK
                        Email: info@karbilyapi.com
                    </p>
                    <p>
                        Telefonlar
                        TEL : 0 372 322 74 56
                        GSM : 0 532 327 05 00
                        GSM : 0 533 553 75 07
                    </p>
                </Card>
            </div>
            <span>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.330407879471!2d31.41768497587233!3d41.279913002655086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c45ea8bd708d7%3A0xd786d26e590511c5!2sKARB%C4%B0L%20YAPI!5e0!3m2!1str!2str!4v1686659757378!5m2!1str!2str"
                    width="500" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </span>
        </Card>
    )
}
export default ContactCard