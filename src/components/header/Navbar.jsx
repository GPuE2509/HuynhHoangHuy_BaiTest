import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { categoriesData } from '../../data/productsData'
import { IconChevronDown, IconMenu, IconClose } from '../common/Icons'

export function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isPagesOpen, setIsPagesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Auto-close mobile menus on page change
  useEffect(() => {
    setIsCategoryOpen(false)
    setIsPagesOpen(false)
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container-custom">
        {/* Mobile / Tablet Header Bar (< lg) */}
        <div className="flex lg:hidden items-center justify-between py-2 gap-3">
          {/* Categories Button Mobile */}
          <div className="relative flex-1">
            <button
              type="button"
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen)
                if (isMobileMenuOpen) setIsMobileMenuOpen(false)
              }}
              className="w-full bg-[#551760] text-white font-medium text-sm sm:text-base py-2.5 px-4 flex items-center justify-between cursor-pointer hover:bg-[#481352] transition-colors"
            >
              <span>Categories</span>
              <IconChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isCategoryOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Mobile Categories Dropdown */}
            {isCategoryOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl z-50 mt-1 max-h-[360px] overflow-y-auto">
                <ul className="text-sm">
                  {categoriesData.map((cat) => (
                    <li
                      key={cat.id}
                      className="border-b border-gray-100 last:border-none"
                    >
                      <a
                        href={`#${cat.id}`}
                        onClick={() => setIsCategoryOpen(false)}
                        className="flex items-center justify-between px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#551760] transition-colors"
                      >
                        <span>{cat.label}</span>
                        {cat.hasChildren && (
                          <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
              if (isCategoryOpen) setIsCategoryOpen(false)
            }}
            className="p-2.5 border border-gray-300 text-gray-700 hover:text-[#551760] hover:border-[#551760] transition-colors cursor-pointer bg-gray-50"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <IconClose className="w-5 h-5" />
            ) : (
              <IconMenu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown (< lg) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 space-y-1">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#551760] font-bold bg-purple-50'
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#551760]'
                }`
              }
            >
              Home
            </NavLink>
            <a
              href="#shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[#551760] transition-colors"
            >
              Shop
            </a>
            <NavLink
              to="/detail?q=Reasonable%20Price"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#551760] font-bold bg-purple-50'
                    : 'text-gray-800 hover:bg-gray-50 hover:text-[#551760]'
                }`
              }
            >
              Shop Detail
            </NavLink>

            {/* Mobile Pages Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[#551760] transition-colors"
              >
                <span>Pages</span>
                <IconChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isPagesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isPagesOpen && (
                <div className="pl-6 py-1 bg-gray-50/50 space-y-1">
                  <a
                    href="#shopping-cart"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-1.5 text-xs text-gray-600 hover:text-[#551760]"
                  >
                    Shopping Cart
                  </a>
                  <a
                    href="#checkout"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-1.5 text-xs text-gray-600 hover:text-[#551760]"
                  >
                    Checkout
                  </a>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[#551760] transition-colors"
            >
              Contact
            </a>

            {/* Mobile Auth Links */}
            <div className="pt-2 mt-2 border-t border-gray-100 flex items-center px-4 space-x-6 text-sm font-medium text-gray-800">
              <a
                href="#login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#551760] transition-colors"
              >
                Login
              </a>
              <a
                href="#register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#551760] transition-colors"
              >
                Register
              </a>
            </div>
          </div>
        )}

        {/* Desktop Layout (>= lg) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-center">
          {/* Left Column: Categories Dropdown (Cols 1-3) */}
          <div className="col-span-3 relative">
            <button
              type="button"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full bg-[#551760] text-white font-medium text-base py-3 px-6 flex items-center justify-between cursor-pointer hover:bg-[#481352] transition-colors"
            >
              <span>Categories</span>
            </button>

            {/* Categories Dropdown Menu: hiển thị khi bấm mở trên trang Detail hoặc ngoài HomePage */}
            {isCategoryOpen && !isHomePage && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl z-50">
                <ul className="text-sm">
                  {categoriesData.map((cat) => (
                    <li
                      key={cat.id}
                      className="border-b border-gray-100 last:border-none"
                    >
                      <a
                        href={`#${cat.id}`}
                        className="flex items-center justify-between px-6 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#551760] transition-colors"
                      >
                        <span>{cat.label}</span>
                        {cat.hasChildren && (
                          <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Navigation Links & Auth (Cols 4-12) */}
          <nav className="col-span-9 flex items-center justify-between py-3">
            {/* Main Navigation Links */}
            <div className="flex items-center space-x-7 text-sm font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#d19c97] font-semibold transition-colors'
                    : 'text-gray-800 hover:text-[#551760] transition-colors'
                }
              >
                Home
              </NavLink>
              <a
                href="#shop"
                className="text-gray-800 hover:text-[#551760] transition-colors"
              >
                Shop
              </a>
              <NavLink
                to="/detail?q=Reasonable%20Price"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#d19c97] font-semibold transition-colors'
                    : 'text-gray-800 hover:text-[#551760] transition-colors'
                }
              >
                Shop Detail
              </NavLink>

              {/* Pages Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  className="flex items-center space-x-1 text-gray-800 hover:text-[#551760] transition-colors cursor-pointer"
                >
                  <span>Pages</span>
                  <IconChevronDown className="w-3.5 h-3.5" />
                </button>
                {isPagesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md py-1 z-50">
                    <a
                      href="#shopping-cart"
                      className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#551760]"
                    >
                      Shopping Cart
                    </a>
                    <a
                      href="#checkout"
                      className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#551760]"
                    >
                      Checkout
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="text-gray-800 hover:text-[#551760] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Right Auth Links */}
            <div className="flex items-center space-x-6 text-sm font-medium text-gray-800">
              <a
                href="#login"
                className="hover:text-[#551760] transition-colors"
              >
                Login
              </a>
              <a
                href="#register"
                className="hover:text-[#551760] transition-colors"
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
