import sideBannerBg from '../../assets/banner/sideBanner.png'

export function SideBanner() {
  return (
    <div className="relative w-full h-full min-h-[170px] sm:min-h-[220px] lg:min-h-[480px] bg-white border border-gray-200 rounded-none overflow-hidden p-6 sm:p-7 lg:p-8 flex flex-col justify-start shadow-2xs">
      {/* Background Graphic Pattern */}
      <img
        src={sideBannerBg}
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-85"
      />

      {/* Text Overlay */}
      <div className="relative z-10 pt-1 sm:pt-2 lg:pt-4">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug mb-2 sm:mb-4 lg:mb-8 max-w-[260px] lg:max-w-[200px]">
          Find out what everyone&apos;s talking about
        </h3>
        <p className="text-xs sm:text-sm font-medium text-gray-700">
          Browse our best
        </p>
      </div>
    </div>
  )
}
