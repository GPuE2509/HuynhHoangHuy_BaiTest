import { Link } from 'react-router-dom'
import lumiSpaImg from '../../assets/banner/ageLOC-LumiSpa-iO.jpg'

export function LumiSpaBanner() {
  return (
    <section className="py-2">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full min-h-0 md:min-h-[560px] lg:min-h-[620px] bg-[#f3f2ee]">
          {/* Left: Product image and promo badge */}
          <div className="relative min-w-0 flex items-start justify-center px-4 sm:px-6 md:px-5 lg:px-6 pt-10 sm:pt-14 md:pt-32 pb-4 sm:pb-6 md:pb-36">
            <div className="relative w-full max-w-[400px] md:max-w-none flex items-start justify-center">
              <img
                src={lumiSpaImg}
                alt="ageLOC LumiSpa iO Nu Skin"
                className="block w-full h-auto max-h-[320px] sm:max-h-[360px] md:max-h-[400px] object-contain object-top select-none"
              />

              {/* Promo badge */}
              <div className="absolute z-10 -top-4 -right-1 sm:-top-5 sm:right-0 md:-top-4 md:right-0 lg:-top-5 lg:right-1 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#44124d] text-white flex flex-col items-center justify-center text-center shadow-md">
                <span className="text-[10px] sm:text-[11px] font-normal leading-tight">
                  Sale Of
                </span>
                <span className="text-xs sm:text-sm font-bold leading-tight">
                  $29.99
                </span>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="min-w-0 flex flex-col items-start justify-start text-left px-6 sm:px-8 md:px-8 lg:px-12 pt-2 sm:pt-4 md:pt-32 pb-10 sm:pb-14 md:pb-36">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#d9383a] mb-3">
              AGELOC&reg; LUMISPA&reg; IO
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
              ageLOC&reg; LumiSpa&reg; iO
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8">
              Elevate your skincare routine
            </p>

            <Link
              to="/detail?q=ageLOC%20LumiSpa%20iO"
              className="inline-block bg-[#551760] hover:bg-[#44124e] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-8 sm:px-10 py-3.5 transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}