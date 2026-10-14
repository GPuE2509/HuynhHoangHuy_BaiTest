import { categoriesData } from '../data/productsData'
import { HeroSlider } from '../components/hero/HeroSlider'
import { SubBanners } from '../components/hero/SubBanners'
import { SectionTitle } from '../components/common/SectionTitle'
import { MostPopularSection } from '../components/products/MostPopularSection'
import { LumiSpaBanner } from '../components/promotional/LumiSpaBanner'
import { AwardsSection } from '../components/awards/AwardsSection'
import { NuSkinWaySection } from '../components/brandStory/NuSkinWaySection'
import { NewsSection } from '../components/news/NewsSection'
import { IconChevronDown } from '../components/common/Icons'

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Section 1: Hero Banner + Categories */}
      <section className="pt-0 pb-2">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-start">
            {/* Left Column: Categories List */}
            <div className="hidden lg:block lg:col-span-3 bg-white border border-t-0 border-gray-200 shadow-2xs">
              <ul className="text-sm">
                {categoriesData.map((cat) => (
                  <li
                    key={cat.id}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <a
                      href={`#${cat.id}`}
                      className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#551760] transition-colors"
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

            {/* Right Column: Hero Slider + Sub-Banners */}
            <div className="lg:col-span-9 flex flex-col gap-2">
              <HeroSlider />
              <SubBanners />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Most Popular Products */}
      <SectionTitle title="Most Popular Products" />
      <MostPopularSection />

      {/* Section 3: LumiSpa Banner */}
      <LumiSpaBanner />

      {/* Section 4: Awards */}
      <AwardsSection />

      {/* Section 5: The Nu Skin Way */}
      <NuSkinWaySection />

      {/* Section 6: News */}
      <NewsSection />
    </div>
  )
}
