function CompaniesSection() {
  const assetBase = import.meta.env.BASE_URL

  const logos = [
    { src: 'group-96.svg', width: 101.07, height: 37.76, left: 194, top: 225 },
    { src: 'group-97.svg', width: 95.42, height: 25.15, left: 389, top: 231 },
    { src: 'group-98.svg', width: 105.46, height: 21.02, left: 572, top: 233 },
    { src: 'group-99.svg', width: 85.18, height: 19.22, left: 769, top: 234.99 },
    { src: 'group-100.svg', width: 69.87, height: 25.46, left: 970, top: 232 },
  ]

  const rectangles = [
    { left: 165 },
    { left: 355 },
    { left: 545 },
    { left: 735 },
    { left: 925 },
    { left: 1115 },
  ]

  return (
    <section className="absolute w-full top-[3057px] left-0 z-[2]">
      {/* Section Title */}
      <h2 
        className="absolute left-[437px] top-0 font-poppins font-semibold text-[48px] leading-[1.3333333333333333em] text-center text-text-white w-[567px] h-[128px]"
      >
        Companies we Worked<br />With in Since 2015
      </h2>
      
      {/* Company Logos - positioned absolutely relative to section */}
      {logos.map((logo, index) => (
        <img
          key={logo.src}
          src={`${assetBase}assets/images/${logo.src}`}
          alt={`Company Logo ${index + 1}`}
          className="absolute block z-[3]"
          style={{ width: `${logo.width}px`, height: `${logo.height}px`, left: `${logo.left}px`, top: `${logo.top}px` }}
        />
      ))}
      
      {/* Company Rectangles - at y=3255 relative to page, so y=3255-3057=198 relative to section */}
      <div className="absolute left-[165px] top-[198px] grid grid-cols-6 gap-[5px]">
        {rectangles.map((rect, index) => (
          <div 
            key={index}
            className="w-[160px] h-[92px] bg-dark-bg rounded-[10px]"
          />
        ))}
      </div>
    </section>
  )
}

export default CompaniesSection
