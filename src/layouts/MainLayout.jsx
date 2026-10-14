import { Outlet } from 'react-router-dom'
import { TopBar } from '../components/header/TopBar'
import { MainHeader } from '../components/header/MainHeader'
import { Navbar } from '../components/header/Navbar'
import { FooterTop } from '../components/footer/FooterTop'
import { FooterBottom } from '../components/footer/FooterBottom'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header hierarchy */}
      <header className="w-full">
        <TopBar />
        <MainHeader />
        <Navbar />
      </header>

      {/* Main content from active route */}
      <main className="flex-1 w-full pb-16 md:pb-20">
        <Outlet />
      </main>

      {/* Footer hierarchy */}
      <footer className="w-full mt-auto">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  )
}
