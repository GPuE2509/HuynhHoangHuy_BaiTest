import { useState, useRef } from 'react'
import { SectionTitle } from '../common/SectionTitle'
import { awardsData } from '../../data/awardsData'
import bannerEuromonitorImg from '../../assets/banner/bannerEuromonitor.png'

export function AwardsSection() {
  const containerRef = useRef(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftStart, setScrollLeftStart] = useState(0)
  const [activeDot, setActiveDot] = useState(0)

  const displayList = awardsData

  const handleMouseDown = (e) => {
    if (!containerRef.current) return

    setIsMouseDown(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeftStart(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isMouseDown || !containerRef.current) return

    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1.3

    containerRef.current.scrollLeft = scrollLeftStart - walk
  }

  const handleMouseUp = () => setIsMouseDown(false)
  const handleMouseLeave = () => setIsMouseDown(false)

  const handleScroll = () => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    const maxScroll = scrollWidth - clientWidth

    if (maxScroll <= 0 || awardsData.length <= 1) {
      setActiveDot(0)
      return
    }

    const ratio = scrollLeft / maxScroll
    const dotIndex = Math.min(
      awardsData.length - 1,
      Math.max(0, Math.round(ratio * (awardsData.length - 1)))
    )

    setActiveDot(dotIndex)
  }

  const handleDotClick = (idx) => {
    if (!containerRef.current || awardsData.length <= 1) return

    const { scrollWidth, clientWidth } = containerRef.current
    const maxScroll = scrollWidth - clientWidth

    if (maxScroll <= 0) return

    const targetScroll =
      (idx / (awardsData.length - 1)) * maxScroll

    containerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    })

    setActiveDot(idx)
  }

  return (
    <section className="py-6 bg-white overflow-hidden">
      {/* 1. Section Title */}
      <SectionTitle title="Award And Recognition" />

      <div className="container-custom mt-6">
        {/* 2. Euromonitor Device Banner */}
        <div
          className="w-full overflow-hidden border border-gray-100 shadow-2xs mb-8 sm:mb-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 lg:px-14 py-4 sm:py-3"
          style={{
            background:
              'linear-gradient(90deg, #edf0f1 0%, #e2e4e4 35%, #d9d9d7 100%)',
          }}
        >
          {/* Left: Beauty Devices */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <img
              src={bannerEuromonitorImg}
              alt="Nu Skin Beauty & Wellness Device Systems"
              className="h-24 sm:h-28 md:h-36 lg:h-44 w-auto max-w-full object-contain select-none pointer-events-none"
              loading="lazy"
            />
          </div>

          {/* Right: Euromonitor Claim */}
          <div className="w-full md:w-auto md:min-w-[42%] mt-4 md:mt-0 flex flex-col items-center justify-center text-center">
            <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-800 tracking-wider uppercase mb-1">
              WORLD&apos;S #1 COMPANY FOR
            </h3>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium text-gray-900 leading-tight mb-1.5">
              Beauty &amp; Wellness Device Systems
            </p>

            <p className="text-[10px] sm:text-[11px] font-normal text-gray-600 italic">
              Source: Euromonitor
            </p>
          </div>
        </div>

        {/* 3. Awards Carousel - Tăng khoảng cách 2 bên để căn vào giữa hơn */}
        <div className="max-w-6xl mx-auto px-4 sm:px-10 md:px-16 lg:px-24">
          <div className="relative">
            <div
              ref={containerRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className={`w-full overflow-x-auto scrollbar-none select-none ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
                }`}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Dải awards với khoảng cách gần nhau hơn (gap gọn gàng) */}
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 px-2 py-2">
                {displayList.map((award, index) => (
                  <div
                    key={`${award.id}-${index}`}
                    className="flex-shrink-0 w-[130px] sm:w-[140px] md:w-[150px] px-1 flex flex-col items-center"
                  >
                    {/* Award Badge */}
                    <div className="w-22 h-22 sm:w-24 sm:h-24 md:w-26 md:h-26 mb-2 sm:mb-3 flex items-center justify-center p-0.5 transition-transform duration-300 hover:scale-105 pointer-events-none">
                      <img
                        src={award.image}
                        alt={award.productName || 'Award'}
                        className="max-w-full max-h-full object-contain pointer-events-none"
                        loading="lazy"
                      />
                    </div>

                    {/* Award Information */}
                    <div className="w-full max-w-[130px] sm:max-w-[140px] flex flex-col items-center">
                      <h4 className="text-[12px] sm:text-[13px] font-semibold text-gray-900 leading-snug whitespace-pre-line text-center mb-1 break-words">
                        {award.productName}
                      </h4>

                      <p className="text-[10.5px] sm:text-[11.5px] text-gray-500 leading-tight whitespace-pre-line text-center break-words">
                        {award.awardTitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Pagination Dots */}
            <div className="mt-8 sm:mt-12 lg:mt-20 flex justify-center items-center gap-0">
              {awardsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Go to award ${idx + 1}`}
                  className="p-1 flex items-center justify-center cursor-pointer group focus:outline-none"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${idx === activeDot
                      ? 'w-2.5 h-2.5 bg-[#0070ba]'
                      : 'w-2 h-2 bg-gray-300 group-hover:bg-gray-400'
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}