import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="absolute w-full top-[3441px] left-0 z-[2]">
      <div className="absolute left-[165px] top-0 w-[1110px] h-[425px] gradient-cta rounded-[40px]">
        {/* CTA Label */}
        <p 
          className="absolute left-[263px] top-[99px] font-poppins font-normal text-[20px] leading-[1.6em] text-center text-text-white w-[182px] h-[32px]"
        >
          Love our Our Tool?
        </p>
        
        {/* CTA Title */}
        <h2 
          className="absolute left-[262px] top-[141px] font-poppins font-semibold text-[48px] leading-[1.3541666666666667em] text-left text-text-white w-[499px] h-[130px]"
        >
          Fell Free to Join our 15 Days Free Trial
        </h2>
        
        {/* CTA Button */}
        <Link
          to="/signup"
          className="absolute left-[262px] top-[309px] font-poppins font-normal text-body-sm text-text-white gradient-main rounded-[5px] px-[28px] py-[12px] whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-main-gradient-start focus:ring-offset-2 focus:ring-offset-dark-bg"
        >
          Download Template
        </Link>
      </div>
    </section>
  )
}

export default CTASection

