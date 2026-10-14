
import { useState } from 'react'
import heroBannerImg from '../../assets/banner/hero-banner.jpg'
import subBanner1 from '../../assets/banner/sub-banner-1.jpg'
import subBanner2 from '../../assets/banner/sub-banner-2.jpg'
import { IconChevronLeft, IconChevronRight } from '../common/Icons'

const slides = [
  {
    id: 1,
    image: heroBannerImg,
    alt: '10% OFF YOUR FIRST ORDER Reasonable Price',
  },
  {
    id: 2,
    image: subBanner1,
    alt: '10% OFF YOUR FIRST ORDER Reasonable Price',
  },
  {
    id: 3,
    image: subBanner2,
    alt: '10% OFF YOUR FIRST ORDER Reasonable Price',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const slide = slides[currentSlide]

  return (
    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[430px] rounded-none overflow-hidden group shadow-2xs">
      {/* Background Image */}
      <img
        key={slide.id}
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Shared Typography & CTA */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/75 text-xs sm:text-sm md:text-[15px] font-semibold tracking-widest uppercase drop-shadow-md -translate-y-2 sm:-translate-y-4 md:-translate-y-6">
          10% OFF YOUR FIRST ORDER
        </p>

        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-1 sm:mt-2 mb-3 sm:mb-4 drop-shadow-md">
          Reasonable Price
        </h2>

        <span className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold text-xs sm:text-sm px-6 py-2 rounded-none shadow-sm transition-all hover:shadow cursor-default">
          Shop Now
        </span>
      </div>

      {/* Previous Slide */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-9 h-11 sm:h-12 rounded-[3px] bg-black/45 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <IconChevronLeft className="w-5 h-5" />
      </button>

      {/* Next Slide */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 sm:w-9 h-11 sm:h-12 rounded-[3px] bg-black/45 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <IconChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${currentSlide === index
              ? 'w-6 bg-white'
              : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </div>
  )
}