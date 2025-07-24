import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
          <ApperIcon name="AlertCircle" className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 font-display">Oops! Something went wrong</h3>
          <p className="text-gray-600">{message}</p>
        </div>
        {onRetry && (
          <Button onClick={onRetry} className="mx-auto">
            <ApperIcon name="RefreshCw" className="w-5 h-5 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}

export default Error