import HeroSection from '../components/homepage/HeroSection'
import FeatureBoxesSection from '../components/homepage/FeatureBoxesSection'
import CompaniesSection from '../components/homepage/CompaniesSection'
import GallerySection from '../components/homepage/GallerySection'
import CTASection from '../components/homepage/CTASection'
import ContactSection from '../components/homepage/ContactSection'
import SupportSection from '../components/homepage/SupportSection'
import Footer from '../components/homepage/Footer'
import BackgroundElements from '../components/homepage/BackgroundElements'

import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="relative w-[1440px] h-[4942px] bg-dark-bg mx-auto overflow-hidden">
      <BackgroundElements />
      {/* Support Logo */}
      <img
        src="/assets/images/group-127.svg"
        alt=""
        className="absolute left-[165px]  top-[32px] w-[131.98px] h-[33.84px] block"
      />
      
      {/* Hero Button 2 - positioned at y=27 relative to page (before hero section) */}
      <Link 
        to="/login"
        className="absolute left-[1077px] top-[27px] font-poppins font-normal text-[14px] leading-[1.4285714285714286em] text-text-white gradient-main rounded-[5px] px-[28px] py-[12px] whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-main-gradient-start focus:ring-offset-2 focus:ring-offset-dark-bg z-[3]"
      >
        Download Template
      </Link>
      
      <HeroSection />
      <GallerySection />
      <FeatureBoxesSection />
      <SupportSection />
      
      {/* Contact Icons - positioned absolutely relative to page */}
      <img
        src="/assets/images/group-124.svg"
        alt=""
        className="absolute left-[512px] top-[2365px] w-[32px] h-[32px] block z-[3]"
      />
      <img
        src="/assets/images/group-125.svg"
        alt=""
        className="absolute left-[567px] top-[2696px] w-[32px] h-[32px] block z-[3]"
      />
      <img
        src="/assets/images/group-126.svg"
        alt=""
        className="absolute left-[271px] top-[2595px] w-[32px] h-[32px] block z-[3]"
      />
      
      {/* Vector icon at x=436, y=2529 */}
      <img
        src="/assets/images/group.svg"
        alt=""
        className="absolute left-[436px] top-[2529px] w-[65px] h-[53px] block z-[3]"
      />
      
      {/* Group 133 at x=130, y=3961 */}
      <img
        src="/assets/images/group-133.svg"
        alt=""
        className="absolute left-[130px] top-[3961px] w-[541.98px] h-[541.85px] block z-[1]"
      />
      
      {/* Group 129 at x=1048, y=1470 */}
      <img
        src="/assets/images/group-129.svg"
        alt=""
        className="absolute left-[1048px] top-[1470px] w-[104px] h-[104px] block z-[3]"
      />
      
      <CompaniesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default HomePage

