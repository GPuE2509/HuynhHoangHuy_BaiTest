import { useState } from 'react'
import { productsData } from '../../data/productsData'
import { SideBanner } from './SideBanner'
import { ProductTabs } from './ProductTabs'
import { ProductCarousel } from './ProductCarousel'

export function MostPopularSection() {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <section className="pt-4 pb-0">
      <div className="container-custom">
        <div className="bg-[#f3f7f8] px-4 py-5 sm:px-5 sm:py-6 lg:px-4 lg:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* Left: Side Banner */}
            <div className="lg:col-span-3 min-w-0">
              <SideBanner />
            </div>

            {/* Right: Tabs and Products */}
            <div className="lg:col-span-9 min-w-0 flex flex-col">
              <div className="mb-4">
                <ProductTabs
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
              </div>

              <ProductCarousel
                products={productsData}
                activeTab={activeTab}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}