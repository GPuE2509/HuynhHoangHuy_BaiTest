import { SectionTitle } from '../common/SectionTitle'
import nswayForceImg from '../../assets/banner/NSWay_Force-for-Good.png'
import nswayScienceImg from '../../assets/news/NSWay_Nature-Science.png'

export function NuSkinWaySection() {
  return (
    <section className="py-2">
      {/* 1. Section Title */}
      <SectionTitle title="The Nu Skin Way" paddingTop="pt-0 sm:pt-0 md:pt-0" />

      <div className="container-custom space-y-10">
        {/* 2. Stats Counter Bar */}
        {/* 2. Stats Counter Bar */}
        <div className="px-5 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12 border border-gray-200/70 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Title Column */}
            <div className="md:col-span-5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                Nu Skin,
                <br />
                Improving Lives Everyday
              </h3>
            </div>

            {/* 3 Metric Columns */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                  25+
                </p>
                <p className="text-xs text-gray-600">Years of Giving</p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                  20+
                </p>
                <a
                  href="#projects"
                  className="text-xs text-gray-600 underline hover:text-[#551760] transition-colors"
                >
                  Current Social Projects
                </a>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                  850M+
                </p>
                <a
                  href="#nourish"
                  className="text-xs text-gray-600 underline hover:text-[#551760] transition-colors leading-tight block"
                >
                  Meals Donated through Nourish the Children
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Two Story Blocks */}
        <div className="space-y-6 sm:space-y-8">
          {/* Story Block 1: Being a Force for Good (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-none border border-gray-100 shadow-2xs">
            <div className="h-[220px] sm:h-[280px] md:h-auto">
              <img
                src={nswayForceImg}
                alt="Nu Skin - Being a Force for Good"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#f7f7f7] p-6 sm:p-8 md:p-12 flex flex-col justify-start">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Being a Force for Good
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
                Some call it corporate social responsibility. We call it our purpose. Together we&apos;re engaged in initiatives worldwide—nourishing thousands of hungry children, funding pediatric health and wellness services, or striving for a more sustainable future. And sometimes, we&apos;re simply taking meaningful steps to improve our local communities. Whatever we do, we believe changing the world begins with a single action.
              </p>
              <div>
                <a
                  href="#explore-projects"
                  className="text-xs font-bold text-gray-900 hover:text-[#551760] transition-colors uppercase tracking-wider"
                >
                  Explore our projects
                </a>
              </div>
            </div>
          </div>

          {/* Story Block 2: Nature + Science (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-none border border-gray-100 shadow-2xs">
            <div className="bg-[#f7f7f7] p-6 sm:p-8 md:p-12 flex flex-col justify-start order-2 md:order-1">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Nature + Science
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6">
                Capturing the best in nature to bring you the best results is our personal mission. We combine powerful ingredients with innovative science and technology. The result? World-class products that deliver real benefits. And even though we&apos;ve spent more than 30 years researching aging at the genetic level, Mother Nature continually inspires us to push the boundaries of inquiry and innovation. We bottle what&apos;s best and bring it right to your door.
              </p>
              <div>
                <a
                  href="#discover-more"
                  className="text-xs font-bold text-gray-900 hover:text-[#551760] transition-colors uppercase tracking-wider"
                >
                  Discover more
                </a>
              </div>
            </div>
            <div className="h-[220px] sm:h-[280px] md:h-auto order-1 md:order-2">
              <img
                src={nswayScienceImg}
                alt="Nu Skin - Nature and Science"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
