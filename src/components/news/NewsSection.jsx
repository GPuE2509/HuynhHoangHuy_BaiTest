import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle } from '../common/SectionTitle'
import { newsData } from '../../data/newsData'
import newsHeroBanner from '../../assets/news/ITN_HERO.png'
import { IconChevronLeft, IconChevronRight } from '../common/Icons'

export function NewsSection() {
  const containerRef = useRef(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftStart, setScrollLeftStart] = useState(0)
  const [activePage, setActivePage] = useState(0)

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return
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

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  const handleMouseLeave = () => {
    setIsMouseDown(false)
  }

  // Update active page indicator
  const handleScroll = () => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } =
      containerRef.current
    const maxScroll = scrollWidth - clientWidth

    if (maxScroll <= 0) {
      setActivePage(0)
      return
    }

    setActivePage(scrollLeft > maxScroll / 2 ? 1 : 0)
  }

  // Previous page
  const handlePrev = () => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } =
      containerRef.current
    const maxScroll = scrollWidth - clientWidth

    if (scrollLeft <= 10) {
      containerRef.current.scrollTo({
        left: maxScroll,
        behavior: 'smooth',
      })
    } else {
      containerRef.current.scrollBy({
        left: -clientWidth,
        behavior: 'smooth',
      })
    }
  }

  // Next page
  const handleNext = () => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } =
      containerRef.current
    const maxScroll = scrollWidth - clientWidth

    if (scrollLeft >= maxScroll - 10) {
      containerRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
    } else {
      containerRef.current.scrollBy({
        left: clientWidth,
        behavior: 'smooth',
      })
    }
  }

  // Click pagination indicator
  const handlePageClick = (pageIdx) => {
    if (!containerRef.current) return

    const { scrollWidth, clientWidth } = containerRef.current
    const maxScroll = scrollWidth - clientWidth

    containerRef.current.scrollTo({
      left: pageIdx === 0 ? 0 : maxScroll,
      behavior: 'smooth',
    })

    setActivePage(pageIdx)
  }

  return (
    <section className="py-6 mb-12">
      {/* Section title */}
      <SectionTitle title="Nu Skin In The News" />

      <div className="container-custom">
        {/* Main content: News carousel + Feature banner */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 items-stretch">

          {/* Left column: News articles */}
          <div className="lg:col-span-7 flex flex-col justify-between">

            {/* View All */}
            <div className="flex justify-end mb-3">
              <Link
                to="/detail?q=Nu%20Skin%20News"
                className="text-xs md:text-sm font-bold text-gray-800 hover:text-[#551760] underline underline-offset-2 transition-colors"
              >
                View All &gt;&gt;
              </Link>
            </div>

            <div className="relative select-none flex-1 flex flex-col justify-between">

              {/* Previous button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous news page"
                className="absolute left-0 sm:-left-4 top-[40%] -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-white border border-gray-300 flex items-center justify-center text-gray-700 shadow-sm transition-all hover:scale-105 cursor-pointer"
              >
                <IconChevronLeft className="w-4 h-4" />
              </button>

              {/* Scrollable news cards */}
              <div
                ref={containerRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className={`overflow-x-auto scrollbar-none w-full flex-1 ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
                  }`}
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                <div className="flex gap-5 items-stretch h-full">
                  {newsData.map((item) => (
                    <div
                      key={item.id}
                      className="w-[calc(100%-1.25rem)] sm:w-[calc(50%-0.625rem)] md:w-[calc((100%-2.5rem)/3)] shrink-0 flex flex-col bg-white border border-gray-200/90 rounded-none overflow-hidden p-4 sm:p-5 group hover:shadow-lg transition-all duration-300 h-full justify-between"
                    >
                      {/* News image */}
                      <div className="w-full aspect-square overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                          loading="lazy"
                        />
                      </div>

                      {/* News title */}
                      <div className="pt-10 sm:pt-14 pb-5 text-center flex-1 flex items-center justify-center">
                        <h4 className="text-[13px] sm:text-[14px] font-semibold text-gray-800 leading-snug hover:text-[#551760] transition-colors max-w-[190px]">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next news page"
                className="absolute right-0 sm:-right-4 top-[40%] -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-white border border-gray-300 flex items-center justify-center text-gray-700 shadow-sm transition-all hover:scale-105 cursor-pointer"
              >
                <IconChevronRight className="w-4 h-4" />
              </button>

              {/* Pagination indicators */}
              <div className="mt-7 flex justify-center items-center gap-2">
                {[0, 1].map((pageIdx) => {
                  const isActive = activePage === pageIdx

                  return (
                    <button
                      key={pageIdx}
                      type="button"
                      onClick={() => handlePageClick(pageIdx)}
                      aria-label={`Chuyển đến trang tin tức ${pageIdx + 1}`}
                      className={`transition-all duration-300 cursor-pointer ${isActive
                        ? 'w-7 h-1.5 bg-[#1f2937] rounded-full'
                        : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400 rounded-full'
                        }`}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right column: Narrower feature banner */}
          <div className="lg:col-span-2 relative rounded-none overflow-hidden min-h-[170px] sm:min-h-[220px] lg:min-h-[540px] shadow-2xs group flex flex-col justify-center items-center">
            <img
              src={newsHeroBanner}
              alt="Nu Skin In The News Feature"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Centered banner text */}
            <div className="relative z-10 p-8 text-center text-white pointer-events-none">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 drop-shadow-md">
                News
              </h3>

              <p className="text-xs md:text-sm font-semibold text-white tracking-wide border-b border-white pb-0.5 inline-block">
                Nu Skin In The News
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}