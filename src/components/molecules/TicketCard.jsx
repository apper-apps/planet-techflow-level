import { format } from "date-fns"
import ApperIcon from "@/components/ApperIcon"
import Badge from "@/components/atoms/Badge"
import Card from "@/components/atoms/Card"

const TicketCard = ({ ticket, onClick }) => {
  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case "open": return "info"
      case "in-progress": return "warning"
      case "closed": return "success"
      case "pending": return "default"
      default: return "default"
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority.toLowerCase()) {
      case "high": return "AlertTriangle"
      case "medium": return "Clock"
      case "low": return "Info"
      default: return "Info"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high": return "text-red-500"
      case "medium": return "text-yellow-500"
      case "low": return "text-green-500"
      default: return "text-gray-500"
    }
  }

  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-lg transition-all duration-200"
      onClick={() => onClick(ticket)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">{ticket.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{ticket.description}</p>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <ApperIcon 
            name={getPriorityIcon(ticket.priority)} 
            className={`w-4 h-4 ${getPriorityColor(ticket.priority)}`} 
          />
          <Badge variant={getStatusVariant(ticket.status)}>
            {ticket.status}
          </Badge>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="flex items-center">
          <ApperIcon name="Tag" className="w-4 h-4 mr-1" />
          {ticket.category}
        </span>
        <span className="flex items-center">
          <ApperIcon name="Calendar" className="w-4 h-4 mr-1" />
          {format(new Date(ticket.createdAt), "MMM d, yyyy")}
        </span>
      </div>
      
      {ticket.attachments && ticket.attachments.length > 0 && (
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <ApperIcon name="Paperclip" className="w-4 h-4 mr-1" />
          {ticket.attachments.length} attachment{ticket.attachments.length !== 1 ? "s" : ""}
        </div>
      )}
    </Card>
  )
}

export default TicketCard