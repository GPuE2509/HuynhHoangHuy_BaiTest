import { Link } from 'react-router-dom'
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconAngleRight,
} from '../common/Icons'

export function FooterTop() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Shop', path: '#shop' },
    { label: 'Shop Detail', path: '/detail?q=Reasonable%20Price' },
    { label: 'Shopping Cart', path: '#cart' },
    { label: 'Checkout', path: '#checkout' },
    { label: 'Contact Us', path: '#contact' },
  ]

  return (
    <div className="bg-[#551760] text-white pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-12 md:pb-14">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-6">
          {/* Column 1: Company Info */}
          <div className="sm:col-span-2 md:col-span-6 lg:col-span-4 space-y-6">
            <p className="text-[14px] text-white/90 leading-relaxed max-w-[430px]">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna,
              ipsum no sit erat lorem et magna ipsum dolore amet erat.
            </p>

            <div className="space-y-3 text-[14px] text-white">
              <div className="flex items-center space-x-3">
                <IconMapPin className="w-4 h-4 text-white shrink-0" />
                <span>123 Street, New York, USA</span>
              </div>

              <div className="flex items-center space-x-3">
                <IconMail className="w-4 h-4 text-white shrink-0" />
                <span>info@example.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <IconPhone className="w-4 h-4 text-white shrink-0" />
                <span>+012 345 67890</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-4">
            <h3 className="text-[17px] font-bold text-white mb-5 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[14px]">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <IconAngleRight className="w-2.5 h-3 text-white mr-2.5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-4">
            <h3 className="text-[17px] font-bold text-white mb-5 tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[14px]">
              {quickLinks.map((link, idx) => (
                <li key={`col3-${idx}`}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-white/90 hover:text-white transition-colors"
                  >
                    <IconAngleRight className="w-2.5 h-3 text-white mr-2.5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}