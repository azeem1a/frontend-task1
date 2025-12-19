function Footer() {
  const footerLinks = [
    ['Home', 'Section One', 'Section Two', 'Section Tree'],
    ['Home', 'Section One', 'Section Two', 'Section Tree'],
    ['Home', 'Section One', 'Section Two', 'Section Tree'],
  ]

  return (
    <footer className="absolute w-[1440px] h-[360px] top-[4582px] left-0 bg-dark-card z-[2]">
      {/* Footer Content */}
      <div className="absolute w-[1440px] h-[268px] top-0 left-0">
        {/* Footer Logo */}
        <img
          src="/assets/images/group-128.svg"
          alt="Logo"
          className="absolute left-[165px] top-[57.37px] w-[56px] h-[45.07px] block"
        />
        
        {/* Footer Text */}
        <p 
          className="absolute left-[165px] top-[125px] font-poppins font-normal text-body text-left text-text-gray w-[303px] h-[83px]"
        >
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
        </p>
        
        {/* Footer Links */}
        <div className="absolute left-[809px] top-[50px] flex gap-[104px]">
          {footerLinks.map((links, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-poppins font-semibold text-[16px] leading-[2em] text-center text-text-white w-[70px] h-[32px] mb-[1px]">
                Sections
              </h4>
              <ul className="list-none font-poppins font-normal text-body leading-[2.7142857142857144em] text-left text-text-gray w-[86px] h-[154px] mt-[1px]">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="absolute w-[1440px] h-[92px] top-[268px] left-0 bg-dark-bg">
        {/* Copyright */}
        <p 
          className="absolute left-[145px] top-[32px] font-poppins font-normal text-body text-left text-text-gray w-[230px] h-[28px]"
        >
          All Rights Reservd Inkyy.com 2022
        </p>
        
        {/* Social Icons */}
        <div className="absolute right-[145px] top-[26px] flex gap-[16px]">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-[40px] h-[40px] bg-dark-card rounded-[16px]"
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

