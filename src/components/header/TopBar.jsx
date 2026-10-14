import {
  IconFacebook,
  IconTwitter,
  IconLinkedIn,
  IconInstagram,
  IconYouTube,
} from '../common/Icons'

export function TopBar() {
  return (
    <div className="bg-[#551760] text-white text-[11px] sm:text-xs py-2 border-b border-[#44124d]">
      <div className="container-custom flex justify-between items-center gap-2">
        {/* Left Links */}
        <div className="flex items-center gap-1.5 sm:gap-3 text-white/90 shrink-0">
          <a href="#faqs" className="hover:text-white transition-colors">
            FAQs
          </a>
          <span className="text-white/40">|</span>
          <a href="#help" className="hover:text-white transition-colors">
            Help
          </a>
          <span className="text-white/40">|</span>
          <a href="#support" className="hover:text-white transition-colors">
            Support
          </a>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-white/80 hover:text-white transition-colors"
          >
            <IconFacebook className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-white/80 hover:text-white transition-colors"
          >
            <IconTwitter className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-white/80 hover:text-white transition-colors"
          >
            <IconLinkedIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white/80 hover:text-white transition-colors"
          >
            <IconInstagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="text-white/80 hover:text-white transition-colors"
          >
            <IconYouTube className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
