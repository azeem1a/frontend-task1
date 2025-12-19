function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'font-poppins font-normal text-body-sm rounded-[5px] px-[28px] py-[12px] whitespace-nowrap cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'gradient-main text-text-white hover:opacity-90 focus:ring-main-gradient-start focus:ring-offset-dark-bg',
    secondary: 'bg-dark-card-alt text-text-white hover:bg-dark-card-deep focus:ring-main-gradient-start',
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

