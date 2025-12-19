import { Link } from 'react-router-dom'

function SupportSection() {
  return (
    <section className="absolute w-full top-[2384px] left-0 z-[2]">
      <div className="absolute left-[832px] top-0 w-[443px]">
        {/* Support Title */}
        <h2 
          className="absolute left-0 top-0 font-poppins font-semibold text-[48px] leading-[1.3333333333333333em] text-left text-text-white w-[443px] h-[204px]"
        >
          We're here to guide and help you at all times
        </h2>
        
        {/* Support Subtitle */}
        <p 
          className="absolute left-0 top-[216px] font-poppins font-normal text-body-lg text-left text-text-gray w-[385px] h-[66px]"
        >
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
        </p>
        
        {/* Support Button */}
        <Link
          to="/signup"
          className="absolute left-0 top-[328px] font-poppins font-normal text-body-sm text-text-white gradient-main rounded-[5px] px-[28px] py-[12px] whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-main-gradient-start focus:ring-offset-2 focus:ring-offset-dark-bg"
        >
          Download
        </Link>
      </div>
   
      
      {/* Support Image - at y=3478 relative to page, so y=3478-2384=1094 relative to section */}
      <img
        src="/assets/images/frame.svg"
        alt=""
        className="absolute left-[721px] top-[1094px] w-[554px] h-[369px] block"
      />
    </section>
  )
}

export default SupportSection

