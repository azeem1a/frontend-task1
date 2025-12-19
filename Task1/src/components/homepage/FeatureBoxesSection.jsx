function FeatureBoxesSection() {
  const features = [
    { id: 1, iconLeft: 318, iconTop: 1499, icon: 'group-102.svg', iconWidth: 44.78, iconHeight: 45.96 },
    { id: 2, iconLeft: 699, iconTop: 1500, icon: 'group.svg', iconWidth: 44, iconHeight: 44.66 },
    { id: 3, iconLeft: 318, iconTop: 1901, icon: 'group-103.svg', iconWidth: 44, iconHeight: 45 },
    { id: 4, iconLeft: 698, iconTop: 1900, icon: 'group-105.svg', iconWidth: 45, iconHeight: 46 },
    { id: 5, iconLeft: 1078, iconTop: 1901, icon: 'group-106.svg', iconWidth: 44, iconHeight: 43.48 },
  ]

  const boxes = [
    { left: 165, top: 1420 },
    { left: 545, top: 1420 },
    { left: 925, top: 1420 },
    { left: 165, top: 1821 },
    { left: 545, top: 1821 },
    { left: 925, top: 1821 },
  ]

  return (
    <section className="absolute w-full top-[1236px] left-0 z-[2]">
      {/* Section Title */}
      <h2 
        className="absolute left-[165px] top-0 font-poppins font-semibold text-section-title text-center text-text-white w-[342px] h-[80px]"
      >
        Feature Boxes
      </h2>
      
      {/* Section Subtitle */}
      <p 
        className="absolute left-[165px] top-[85px] font-poppins font-normal text-body-lg text-left text-text-gray w-[577px] h-[66px]"
      >
        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
      </p>
      
      {/* Feature Boxes Grid */}
      {boxes.map((box, index) => (
        <div 
          key={index}
          className="absolute w-[350px] h-[371px] bg-dark-card rounded-[20px]"
          style={{ left: `${box.left}px`, top: `${box.top - 1236}px` }}
        >
          {/* Feature Icon */}
          <div 
            className="absolute w-[104px] h-[104px] bg-dark-card-alt rounded-[30px] left-1/2 -translate-x-1/2 top-[50px]"
          />
          
          {/* Feature Title */}
          <h3 
            className="absolute left-1/2 -translate-x-1/2 top-[193px] font-poppins font-semibold text-feature-title text-center text-text-white w-[194px] h-[32px]"
          >
            Fully Customizable
          </h3>
          
          {/* Feature Description */}
          <p 
            className="absolute left-[24px] top-[240px] font-poppins font-normal text-body text-center text-text-gray w-[303px] h-[83px]"
          >
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>
        </div>
      ))}
      
      {/* Feature Icons */}
      {features.map((feature) => (
        <img 
          key={feature.id}
          src={`/assets/images/${feature.icon}`}
          alt=""
          className="absolute z-[3]"
          style={{
            left: `${feature.iconLeft}px`,
            top: `${feature.iconTop - 1236}px`,
            width: `${feature.iconWidth}px`,
            height: `${feature.iconHeight}px`,
          }}
        />
      ))}
    </section>
  )
}

export default FeatureBoxesSection

