function Input({ label, error, className = '', ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block text-text-white text-sm mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-dark-card-alt rounded-[5px] text-text-white border border-border-gray focus:outline-none focus:ring-2 focus:ring-main-gradient-start transition ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  )
}

export default Input

