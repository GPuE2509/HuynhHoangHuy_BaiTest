import { Link } from 'react-router-dom'

export function ProductTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 mb-4 sm:mb-6 gap-2 overflow-x-auto scrollbar-none">
      <div className="flex gap-1.5 sm:gap-2 shrink-0">
        <button
          type="button"
          onClick={() => onTabChange('description')}
          className={`px-3 sm:px-5 md:px-8 py-2 sm:py-3 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 'description'
              ? 'border-t-3 border-[#f39c12] bg-white text-gray-900 shadow-2xs font-extrabold'
              : 'text-gray-400 hover:text-gray-600 bg-gray-50/50'
          }`}
        >
          DESCRIPTION
        </button>
        <button
          type="button"
          onClick={() => onTabChange('specifications')}
          className={`px-3 sm:px-5 md:px-8 py-2 sm:py-3 text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 'specifications'
              ? 'border-t-3 border-[#f39c12] bg-white text-gray-900 shadow-2xs font-extrabold'
              : 'text-gray-400 hover:text-gray-600 bg-gray-50/50'
          }`}
        >
          SPECIFICATIONS
        </button>
      </div>

      <Link
        to="/detail?q=All%20Products"
        className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-800 hover:text-[#551760] underline underline-offset-2 transition-colors shrink-0 whitespace-nowrap pl-2"
      >
        View All &gt;&gt;
      </Link>
    </div>
  )
}
