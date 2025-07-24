import { useState } from "react"
import { format } from "date-fns"
import { toast } from "react-toastify"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Badge from "@/components/atoms/Badge"
import Card from "@/components/atoms/Card"
import FormField from "@/components/molecules/FormField"
import ticketsService from "@/services/api/ticketsService"

const TicketDetails = ({ ticket, onBack, onUpdate }) => {
  const [newComment, setNewComment] = useState("")
  const [loading, setLoading] = useState(false)

  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case "open": return "info"
      case "in-progress": return "warning"
      case "closed": return "success"
      case "pending": return "default"
      default: return "default"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high": return "text-red-600 bg-red-50"
      case "medium": return "text-yellow-600 bg-yellow-50"
      case "low": return "text-green-600 bg-green-50"
      default: return "text-gray-600 bg-gray-50"
    }
  }

  const handleAddComment = async (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    try {
      setLoading(true)
      const updatedTicket = {
        ...ticket,
        comments: [
          ...ticket.comments,
          {
            id: Date.now(),
            content: newComment,
            author: "Client",
            timestamp: new Date().toISOString()
          }
        ],
        updatedAt: new Date().toISOString()
      }
      
      await ticketsService.update(ticket.Id, updatedTicket)
      onUpdate(updatedTicket)
      setNewComment("")
      toast.success("Comment added successfully!")
    } catch (error) {
      toast.error("Failed to add comment. Please try again.")
      console.error("Error adding comment:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleEscalate = async () => {
    try {
      setLoading(true)
      const updatedTicket = {
        ...ticket,
        priority: "high",
        comments: [
          ...ticket.comments,
          {
            id: Date.now(),
            content: "Ticket escalated to high priority by client request",
            author: "System",
            timestamp: new Date().toISOString()
          }
        ],
        updatedAt: new Date().toISOString()
      }
      
      await ticketsService.update(ticket.Id, updatedTicket)
      onUpdate(updatedTicket)
      toast.success("Ticket escalated successfully!")
    } catch (error) {
      toast.error("Failed to escalate ticket. Please try again.")
      console.error("Error escalating ticket:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack}>
          <ApperIcon name="ArrowLeft" className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Button>
        <div className="flex items-center space-x-3">
          <Badge variant={getStatusVariant(ticket.status)}>
            {ticket.status}
          </Badge>
          <Badge className={getPriorityColor(ticket.priority)}>
            {ticket.priority} Priority
          </Badge>
        </div>
      </div>

      {/* Ticket Details */}
      <Card className="p-8">
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-display">
            {ticket.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <ApperIcon name="Tag" className="w-4 h-4 mr-2" />
              <span className="font-medium">Category:</span>
              <span className="ml-1">{ticket.category}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <ApperIcon name="Calendar" className="w-4 h-4 mr-2" />
              <span className="font-medium">Created:</span>
              <span className="ml-1">{format(new Date(ticket.createdAt), "MMM d, yyyy 'at' h:mm a")}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <ApperIcon name="Clock" className="w-4 h-4 mr-2" />
              <span className="font-medium">Updated:</span>
              <span className="ml-1">{format(new Date(ticket.updatedAt), "MMM d, yyyy 'at' h:mm a")}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {ticket.description}
            </p>
          </div>

          {ticket.attachments && ticket.attachments.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Attachments</h3>
              <div className="space-y-2">
                {ticket.attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <ApperIcon name="Paperclip" className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-700">{attachment}</span>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <ApperIcon name="Download" className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Comments Section */}
      <Card className="p-8">
        <h3 className="font-semibold text-gray-900 mb-6">Comments & Updates</h3>
        
        <div className="space-y-6 mb-8">
          {ticket.comments && ticket.comments.length > 0 ? (
            ticket.comments.map((comment) => (
              <div key={comment.id} className="border-l-4 border-primary-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{comment.author}</span>
                  <span className="text-sm text-gray-500">
                    {format(new Date(comment.timestamp), "MMM d, yyyy 'at' h:mm a")}
                  </span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No comments yet.</p>
          )}
        </div>

        {/* Add Comment Form */}
        <form onSubmit={handleAddComment} className="space-y-4">
          <FormField
            label="Add Comment"
            type="textarea"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment or provide additional information..."
            rows={4}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="submit"
              disabled={loading || !newComment.trim()}
            >
              {loading ? (
                <>
                  <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                  Adding Comment...
                </>
              ) : (
                <>
                  <ApperIcon name="MessageSquare" className="w-5 h-5 mr-2" />
                  Add Comment
                </>
              )}
            </Button>
            
            {ticket.priority !== "high" && (
              <Button
                type="button"
                variant="secondary"
                onClick={handleEscalate}
                disabled={loading}
              >
                <ApperIcon name="AlertTriangle" className="w-5 h-5 mr-2" />
                Escalate Ticket
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  )
}

export default TicketDetails