function ErrorMessage({ message, onRetry }) {
  return (
    <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-[5px] text-red-400">
      <div className="flex items-center justify-between">
        <span>Error: {message}</span>
        {onRetry && (
          <button
            onClick={onRetry}
            className="ml-4 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-[5px] transition"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorMessage

