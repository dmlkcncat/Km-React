import sss from '../../../data/sss.json'

const SSS = () => {
  return (
    <div className="p-5 space-y-2 faq-svg w-full">
      <div className="text-center text-4xl font-extrabold text-[#364e63] mt-5 p-5 slider-font animate-bounce">
        Sıkça Sorulan Sorular
      </div>
      <div className="max-w-3xl w-full mx-auto space-y-3">
        {sss.map((item) => (
          <details
            key={item.id}
            className="border border-slate-200 text-[#364e63] rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-slate-300 open:bg-slate-200 duration-300"
          >
            <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7">
              {item.id}. {item.question}
              <div className="absolute top-0 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  className="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p className="text-xs pt-3 text-[#364e63]">
              <p>Cevap: {item.answer}</p>
            </p>
          </details>
        ))}
      </div>
      <div className="p-5"></div>
    </div>
  )
}
export default SSS
