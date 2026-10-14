import { useCart } from '../../context/CartContext'
import { IconHeart, IconCart } from '../common/Icons'
import { SearchBar } from './SearchBar'

export function MainHeader() {
  const { totalCount } = useCart()

  return (
    <div className="bg-white py-3 sm:py-4 border-b border-gray-100">
      <div className="container-custom flex items-center justify-between gap-2.5 sm:gap-4 lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Left Column: Completely empty, NO logo (Cols 1-3) */}
        <div className="hidden lg:block lg:col-span-3" />

        {/* Center Column: Search Bar (Cols 4-9) */}
        <div className="flex-1 min-w-0 lg:col-span-6 flex justify-center">
          <SearchBar />
        </div>

        {/* Right Column: Wishlist & Cart (Cols 10-12) */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-3 shrink-0 lg:col-span-3">
          {/* Wishlist Button */}
          <button
            type="button"
            className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3.5 py-2 border border-gray-200 rounded-none text-sm text-[#551760] hover:bg-gray-50 transition-colors cursor-pointer"
            title="Wishlist"
          >
            <IconHeart className="w-4 h-4 text-[#551760]" fill="#551760" />
            <span className="font-semibold text-gray-700 text-xs sm:text-sm">0</span>
          </button>

          {/* Cart Button with Shared Count from CartContext */}
          <button
            type="button"
            className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3.5 py-2 border border-gray-200 rounded-none text-sm text-[#551760] hover:bg-gray-50 transition-colors cursor-pointer"
            title="Shopping Cart"
          >
            <IconCart className="w-4 h-4 text-[#551760]" />
            <span className="font-semibold text-gray-700 text-xs sm:text-sm">{totalCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
