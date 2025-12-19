function GallerySection() {
  const galleryItems = [
    { left: 340, top: 0, width: 246, height: 460, gridCol: 1, gridRow: '1 / 3' },
    { left: 624, top: 0, width: 231, height: 217, gridCol: 2, gridRow: 1 },
    { left: 624, top: 243, width: 231, height: 217, gridCol: 2, gridRow: 2 },
    { left: 873, top: 0, width: 230, height: 328, gridCol: 3, gridRow: 1 },
    { left: 873, top: 354, width: 230, height: 103, gridCol: 3, gridRow: 2 },
  ]

  const galleryCards = [
    { src: 'group-112.svg', top: 619, height: 20 },
    { src: 'group-108.svg', top: 663, height: 54 },
    { src: 'group-109.svg', top: 722, height: 54 },
    { src: 'group-110.svg', top: 781, height: 54 },
    { src: 'group-111.svg', top: 840, height: 54 },
    { src: 'group-115.svg', top: 619, height: 155, left: 634 },
  ]

  return (
    <section className="absolute w-full top-[594px] left-0 z-[2]">
      {/* Gallery Grid */}
      <div className="absolute left-[340px] top-0 grid gap-[27px]" style={{ gridTemplateColumns: '246px 231px 230px', gridTemplateRows: '217px 217px' }}>
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-dark-card-alt rounded-[20px]"
            style={{
              width: `${item.width}px`,
              height: `${item.height}px`,
              gridColumn: item.gridCol,
              gridRow: item.gridRow,
            }}
          />
        ))}
      </div>
      
      {/* Gallery Cards - positions relative to page, so adjust for section top */}
      {/* Group 112 - header at x=893, y=619 */}
      <img
        src="/assets/images/group-112.svg"
        alt=""
        className="absolute left-[893px] top-[25px] block w-[192px] h-[20px]"
      />
      
      {/* Group 108 - at x=893, y=663 */}
      <img
        src="/assets/images/group-108.svg"
        alt=""
        className="absolute left-[893px] top-[69px] block w-[192px] h-[54px]"
      />
      
      {/* Group 109 - at x=893, y=722 */}
      <img
        src="/assets/images/group-109.svg"
        alt=""
        className="absolute left-[893px] top-[128px] block w-[192px] h-[54px]"
      />
      
      {/* Group 110 - at x=893, y=781 */}
      <img
        src="/assets/images/group-110.svg"
        alt=""
        className="absolute left-[893px] top-[187px] block w-[192px] h-[54px]"
      />
      
      {/* Group 111 - at x=893, y=840 */}
      <img
        src="/assets/images/group-111.svg"
        alt=""
        className="absolute left-[893px] top-[246px] block w-[192px] h-[54px]"
      />
      
      {/* Group 115 - large card at x=634, y=619 */}
      <img
        src="/assets/images/group-115.svg"
        alt=""
        className="absolute left-[634px] top-[25px] block w-[192px] h-[155px]"
      />
      
      {/* Group 113 - at x=638, y=862 */}
      <img
        src="/assets/images/group-113.svg"
        alt=""
        className="absolute left-[638px] top-[268px] block w-[192px] h-[20px]"
      />
      
      {/* Line 16 - divider at x=638, y=900 relative to page, so y=900-594=306 relative to section */}
      <div className="absolute left-[638px] top-[306px] w-[192px] h-[1px] bg-border-gray" />
      
      {/* Vector at x=442, y=619 relative to page, so y=619-594=25 relative to section - this is actually a gradient button */}
      <div className="absolute left-[442px] top-[25px] w-[41px] h-[33px] gradient-main rounded-[5px]" />
      
      {/* Chart - Group 132 at x=644, y=930 relative to page, so y=930-594=336 relative to section */}
      <img
        src="/assets/images/group-132.svg"
        alt=""
        className="absolute left-[644px] top-[336px] w-[171.75px] h-[93.34px] block"
      />
    </section>
  )
}

export default GallerySection

