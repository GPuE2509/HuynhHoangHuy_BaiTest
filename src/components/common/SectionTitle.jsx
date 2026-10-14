export function SectionTitle({
  title,
  className = '',
  paddingTop = 'pt-14 sm:pt-16 md:pt-20',
}) {
  return (
    <div
      className={`${paddingTop} pb-6 md:pb-8 flex items-center justify-center ${className}`}
    >
      <div className="container-custom flex items-center justify-center">
        <div className="inline-flex items-center justify-center bg-[#551760] text-white px-0 py-3 md:py-3.5 rounded-[8px] md:rounded-[10px] shadow-sm select-none overflow-hidden">
          {/* Left line */}
          <span className="w-4 sm:w-6 md:w-8 h-[2px] bg-white shrink-0" />

          {/* Title Text */}
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-normal text-white px-2 md:px-3 whitespace-nowrap">
            {title}
          </span>

          {/* Right line */}
          <span className="w-4 sm:w-6 md:w-8 h-[2px] bg-white shrink-0" />
        </div>
      </div>
    </div>
  )
}
