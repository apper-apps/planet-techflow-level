import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const Empty = ({ 
  title = "No data found", 
  description = "There's nothing to show here yet.", 
  actionLabel = "Get Started",
  onAction,
  icon = "FileText"
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto">
          <ApperIcon name={icon} className="w-10 h-10 text-gray-400" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 font-display">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        {onAction && (
          <Button onClick={onAction} className="mx-auto">
            <ApperIcon name="Plus" className="w-5 h-5 mr-2" />
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Empty