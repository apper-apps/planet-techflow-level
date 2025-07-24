import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Select from "@/components/atoms/Select"
import Badge from "@/components/atoms/Badge"
import TicketCard from "@/components/molecules/TicketCard"
import ticketsService from "@/services/api/ticketsService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"

const ClientPortalDashboard = ({ onCreateTicket, onViewTicket }) => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    loadTickets()
  }, [])

  const loadTickets = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await ticketsService.getAll()
      setTickets(data)
    } catch (err) {
      setError("Failed to load tickets. Please try again.")
      console.error("Error loading tickets:", err)
    } finally {
      setLoading(false)
    }
  }

  const filteredTickets = tickets.filter(ticket => {
    if (filter === "all") return true
    return ticket.status.toLowerCase() === filter
  })

  const getStatusCounts = () => {
    return {
      all: tickets.length,
      open: tickets.filter(t => t.status.toLowerCase() === "open").length,
      "in-progress": tickets.filter(t => t.status.toLowerCase() === "in-progress").length,
      closed: tickets.filter(t => t.status.toLowerCase() === "closed").length,
      pending: tickets.filter(t => t.status.toLowerCase() === "pending").length
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadTickets} />

  const statusCounts = getStatusCounts()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-display">Support Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your support tickets and track progress</p>
        </div>
        <Button onClick={onCreateTicket}>
          <ApperIcon name="Plus" className="w-5 h-5 mr-2" />
          Create New Ticket
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {Object.entries(statusCounts).map(([status, count]) => {
          const getStatusColor = (status) => {
            switch (status) {
              case "open": return "text-blue-600 bg-blue-50"
              case "in-progress": return "text-yellow-600 bg-yellow-50"
              case "closed": return "text-green-600 bg-green-50"
              case "pending": return "text-gray-600 bg-gray-50"
              default: return "text-primary-600 bg-primary-50"
            }
          }

          return (
            <motion.div
              key={status}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                filter === status 
                  ? "border-primary-500 bg-primary-50 shadow-lg" 
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
              }`}
              onClick={() => setFilter(status)}
              whileHover={{ y: -2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{count}</div>
                <div className={`text-sm font-medium capitalize px-3 py-1 rounded-full ${getStatusColor(status)}`}>
                  {status === "in-progress" ? "In Progress" : status}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Filter by Status:</label>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-48"
          >
            <option value="all">All Tickets</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
          </Select>
        </div>
        <div className="text-sm text-gray-600">
          Showing {filteredTickets.length} of {tickets.length} tickets
        </div>
      </div>

      {/* Tickets List */}
      {filteredTickets.length === 0 ? (
        <Empty 
          title="No tickets found"
          description={filter === "all" ? "You haven't created any support tickets yet." : `No ${filter} tickets found.`}
          actionLabel="Create Your First Ticket"
          onAction={onCreateTicket}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTickets.map((ticket, index) => (
            <motion.div
              key={ticket.Id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TicketCard 
                ticket={ticket} 
                onClick={onViewTicket}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ClientPortalDashboard