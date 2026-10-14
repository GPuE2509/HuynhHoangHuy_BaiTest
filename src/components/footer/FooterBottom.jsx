import visaImg from '../../assets/logoFooter/visa.png'
import mastercardImg from '../../assets/logoFooter/mastercard.png'
import paypalImg from '../../assets/logoFooter/paypal.png'
import amexImg from '../../assets/logoFooter/americanExpress.png'
import visaElectronImg from '../../assets/logoFooter/visaElectron.png'
import maestroImg from '../../assets/logoFooter/maestro.png'

export function FooterBottom() {
  const paymentMethods = [
    {
      name: 'Visa',
      src: visaImg,
      bg: 'bg-white',
      imgClass: 'h-3.5 max-h-3.5 w-auto object-contain',
    },
    {
      name: 'MasterCard',
      src: mastercardImg,
      bg: 'bg-white',
      imgClass: 'h-4 max-h-4 w-auto object-contain',
    },
    {
      name: 'PayPal',
      src: paypalImg,
      bg: 'bg-white',
      imgClass: 'h-3.5 max-h-3.5 w-auto object-contain',
    },
    {
      name: 'American Express',
      src: amexImg,
      bg: 'bg-[#007cc3]',
      imgClass: 'h-4 max-h-4 w-auto object-contain',
    },
    {
      name: 'Visa Electron',
      src: visaElectronImg,
      bg: 'bg-[#005193]',
      imgClass: 'h-full w-full object-contain',
    },
    {
      name: 'Maestro',
      src: maestroImg,
      bg: 'bg-[#003865]',
      imgClass: 'h-4 max-h-4 w-auto object-contain',
    },
  ]

  return (
    <div className="bg-[#44124d] text-white/80 py-6 border-t border-[#93669b]/40 text-xs">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright text (2 lines matching screenshot) */}
        <div className="text-center md:text-left leading-relaxed text-[13px] text-white/85">
          <p>
            &copy; <span className="font-bold text-white">Your Site Name</span>. All Rights Reserved. Designed by{' '}
            <span className="font-bold text-white">HTML Codex</span>
          </p>
          <p>
            Distributed By <span className="font-bold text-white">ThemeWagon</span>
          </p>
        </div>

        {/* Right: Payment Method Badges */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2">
          {paymentMethods.map((item) => (
            <div
              key={item.name}
              className={`h-[24px] sm:h-[26px] w-[36px] sm:w-[38px] rounded-[2px] flex items-center justify-center p-0.5 shadow-2xs overflow-hidden ${item.bg}`}
              title={item.name}
            >
              <img
                src={item.src}
                alt={item.name}
                className={item.imgClass}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
