import { useState, useRef } from 'react'
import { ProductCard } from './ProductCard'
import { IconChevronLeft, IconChevronRight } from '../common/Icons'

export function ProductCarousel({ products, activeTab = 'description' }) {
  const containerRef = useRef(null)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftStart, setScrollLeftStart] = useState(0)
  const [activePage, setActivePage] = useState(0)

  // Mouse Drag handlers for free continuous scrolling
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

  // Update active page indicator in real time as user scrolls
  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    const maxScroll = scrollWidth - clientWidth
    if (maxScroll <= 0) {
      setActivePage(0)
      return
    }
    const page = scrollLeft > maxScroll / 2 ? 1 : 0
    setActivePage(page)
  }

  // Arrow navigation: smoothly scrolls by viewport width
  const handlePrev = () => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    const maxScroll = scrollWidth - clientWidth
    if (scrollLeft <= 10) {
      containerRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else {
      containerRef.current.scrollBy({ left: -clientWidth, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    const maxScroll = scrollWidth - clientWidth
    if (scrollLeft >= maxScroll - 10) {
      containerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      containerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' })
    }
  }

  // Click indicator to jump to page 0 or page 1
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
    <div className="relative flex flex-col select-none">
      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous products page"
        className="absolute left-0 sm:-left-4 top-[40%] -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-white border border-gray-300 flex items-center justify-center text-gray-700 shadow-sm transition-all hover:scale-105 cursor-pointer"
      >
        <IconChevronLeft className="w-4 h-4" />
      </button>

      {/* Free-scrollable & draggable Viewport */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`w-full overflow-x-auto scrollbar-none select-none ${
          isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[calc(100%-1.25rem)] sm:w-[calc(50%-0.625rem)] md:w-[calc((100%-2.5rem)/3)] shrink-0"
            >
              <ProductCard
                product={product}
                showSpecs={activeTab === 'specifications'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next products page"
        className="absolute right-0 sm:-right-4 top-[40%] -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-white border border-gray-300 flex items-center justify-center text-gray-700 shadow-sm transition-all hover:scale-105 cursor-pointer"
      >
        <IconChevronRight className="w-4 h-4" />
      </button>

      {/* Bottom Pagination Indicators */}
      <div className="mt-7 flex justify-center items-center gap-2">
        {[0, 1].map((pageIdx) => {
          const isActive = activePage === pageIdx
          return (
            <button
              key={pageIdx}
              type="button"
              onClick={() => handlePageClick(pageIdx)}
              aria-label={`Chuyển đến trang ${pageIdx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-7 h-1.5 bg-[#1f2937] rounded-full'
                  : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400 rounded-full'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}
