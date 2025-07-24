import { useState } from "react"
import { toast } from "react-toastify"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import FormField from "@/components/molecules/FormField"
import Card from "@/components/atoms/Card"
import ticketsService from "@/services/api/ticketsService"

const TicketForm = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "medium",
    description: "",
    attachments: []
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const categories = [
    "Software Development",
    "ERP & IT Consulting", 
    "Networking & Servers",
    "Cybersecurity",
    "Hardware Support",
    "General Support"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const newErrors = {}
    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setLoading(true)
      const ticketData = {
        ...formData,
        status: "open",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        comments: []
      }
      
      await ticketsService.create(ticketData)
      toast.success("Support ticket created successfully!")
      onSuccess()
    } catch (error) {
      toast.error("Failed to create ticket. Please try again.")
      console.error("Error creating ticket:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files.map(file => file.name)]
    }))
  }

  return (
    <Card className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 font-display">Create Support Ticket</h2>
          <p className="text-gray-600 mt-1">Describe your issue and we'll help you resolve it</p>
        </div>
        <Button variant="ghost" onClick={onCancel}>
          <ApperIcon name="X" className="w-5 h-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Ticket Title"
          required
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Brief description of your issue"
          error={errors.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Category"
            type="select"
            required
            value={formData.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
            error={errors.category}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </FormField>

          <FormField
            label="Priority"
            type="select"
            value={formData.priority}
            onChange={(e) => handleInputChange("priority", e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </FormField>
        </div>

        <FormField
          label="Description"
          type="textarea"
          required
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Please provide detailed information about your issue..."
          error={errors.description}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Attachments (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors duration-200">
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <ApperIcon name="Upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Click to upload files or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, DOC, TXT, PNG, JPG up to 10MB each
              </p>
            </label>
          </div>
          
          {formData.attachments.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-2">Attached Files:</p>
              <div className="space-y-1">
                {formData.attachments.map((file, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <ApperIcon name="Paperclip" className="w-4 h-4 mr-2" />
                    {file}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
          <Button
            type="submit"
            disabled={loading}
            className="flex-1"
          >
            {loading ? (
              <>
                <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                Creating Ticket...
              </>
            ) : (
              <>
                <ApperIcon name="Send" className="w-5 h-5 mr-2" />
                Create Ticket
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={loading}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default TicketForm