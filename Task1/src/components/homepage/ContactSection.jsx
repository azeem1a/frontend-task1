function ContactSection() {
  return (
    <section className="absolute w-full top-[3961px] left-0 z-[2]">
      {/* Section Title */}
      <h2 
        className="absolute left-[735px] top-0 font-poppins font-semibold text-section-title text-left text-text-white w-[304px] h-[80px]"
      >
        Get In Touch
      </h2>
      
      {/* Section Subtitle */}
      <p 
        className="absolute left-[735px] top-[80px] font-poppins font-normal text-body-lg text-left text-text-gray w-[503px] h-[66px]"
      >
        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
      </p>
      
      {/* Contact Form */}
      <form className="absolute left-[735px] top-[154px] flex flex-col gap-[10px]">
        <input
          type="text"
          placeholder="First Name"
          className="font-poppins font-normal text-body-sm text-text-gray bg-dark-card border-none rounded-[5px] px-[28px] py-[12px] w-[408px] focus:outline-none focus:ring-2 focus:ring-main-gradient-start"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="font-poppins font-normal text-body-sm text-text-gray bg-dark-card border-none rounded-[5px] px-[28px] py-[12px] w-[408px] focus:outline-none focus:ring-2 focus:ring-main-gradient-start"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="font-poppins font-normal text-body-sm text-text-gray bg-dark-card border-none rounded-[5px] px-[28px] py-[12px] w-[408px] focus:outline-none focus:ring-2 focus:ring-main-gradient-start"
        />
        <textarea
          placeholder="Your Message"
          className="font-poppins font-normal text-body-sm text-text-gray bg-dark-card border-none rounded-[5px] px-[28px] py-[12px] w-[408px] h-[156px] resize-none focus:outline-none focus:ring-2 focus:ring-main-gradient-start"
        />
        <button
          type="submit"
          className="font-poppins font-normal text-body-sm text-text-white gradient-main rounded-[5px] px-[28px] py-[12px] whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-main-gradient-start focus:ring-offset-2 focus:ring-offset-dark-bg mt-[10px]"
        >
          Get in Touch
        </button>
      </form>
      
    </section>
  )
}

export default ContactSection

