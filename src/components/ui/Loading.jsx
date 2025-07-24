const Loading = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-accent-500 rounded-full animate-spin mx-auto" style={{ animationDelay: '0.15s', animationDuration: '1.5s' }}></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 font-display">Loading...</h3>
          <p className="text-gray-600">Please wait while we fetch your data</p>
        </div>
      </div>
    </div>
  )
}

export default Loading