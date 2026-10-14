
import subBanner1 from '../../assets/banner/sub-banner-1.jpg'
import subBanner2 from '../../assets/banner/sub-banner-2.jpg'

const banners = [
  {
    id: 1,
    image: subBanner1,
    alt: 'Prefer Customer 2025 Winter Collection',
    background:
      'linear-gradient(90deg, #bcc0c4 0%, #c8c2cb 30%, #d8b6c8 65%, #e2b4c8 100%)',
  },
  {
    id: 2,
    image: subBanner2,
    alt: 'Prefer Customer 2025 Winter Collection Nu Skin',
    background:
      'linear-gradient(90deg, #97a4b2 0%, #b2b4bd 30%, #d8c7bf 65%, #fee5ce 100%)',
  },
]

export function SubBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="relative h-[160px] sm:h-[180px] md:h-[200px] rounded-none overflow-hidden group shadow-2xs flex items-center justify-between border border-gray-100/50"
          style={{ background: banner.background }}
        >
          {/* Left Typography & CTA */}
          <div className="relative z-10 flex flex-col justify-center items-start pl-6 sm:pl-8 lg:pl-10 pr-2 max-w-[50%]">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-700">
              PREFER CUSTOMER 2025
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-3 sm:mb-3.5 leading-tight">
              Winter
              <br />
              Collection
            </h3>

            <span className="inline-block px-3.5 sm:px-4 py-1 text-xs font-semibold text-gray-800 border border-gray-400 bg-white/40 group-hover:bg-black group-hover:text-white transition-colors rounded-none">
              Shop Now
            </span>
          </div>

          {/* Right Image with smooth blend */}
          <div className="relative h-full w-[52%] sm:w-[55%] flex justify-end items-center overflow-hidden">
            <img
              src={banner.image}
              alt={banner.alt}
              className="h-full w-full object-cover object-right pointer-events-none select-none"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, black 40%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, black 40%)',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
