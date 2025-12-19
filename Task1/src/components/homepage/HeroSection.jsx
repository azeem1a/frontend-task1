import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="absolute w-full top-[169px] left-0 z-[2]">
      {/* Hero Title */}
      <h1 
        className="absolute left-[346px] top-0 font-poppins font-semibold text-[64px] leading-[1.25em] text-center text-text-white w-[749px] h-[160px]"
      >
        Beautiful Landing Page<br />Design for You
      </h1>
         
      
      
      {/* Hero Subtitle - at y=347 relative to page, so y=347-169=178 relative to section */}
      <p 
        className="absolute left-[432px] top-[178px] font-poppins font-normal text-[18px] leading-[1.5555555555555556em] text-center text-text-gray w-[577px] h-[66px]"
      >
        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
      </p>
      
      {/* Hero Button 1 - at y=438 relative to page, so y=438-169=269 relative to section */}
      <Link 
        to="/login"
        className="absolute left-[621px] top-[269px] font-poppins font-normal text-[14px] leading-[1.4285714285714286em] text-text-white gradient-main rounded-[5px] px-[28px] py-[12px] whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-main-gradient-start focus:ring-offset-2 focus:ring-offset-dark-bg"
      >
        Download Template
      </Link>
      
      
      {/* Hero Image Container - Rectangle 6 at y=551 relative to page, so y=551-169=382 relative to section */}
      <div className="absolute left-[287px] top-[382px] w-[866px] h-[553px]">
        <div className="w-full h-full bg-dark-card-deep rounded-[28px]" />
      </div>
    </section>
  )
}

export default HeroSection

