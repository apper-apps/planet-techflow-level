import { useState } from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import FormField from "@/components/molecules/FormField"
import ClientPortalDashboard from "@/components/organisms/ClientPortalDashboard"
import TicketForm from "@/components/organisms/TicketForm"
import TicketDetails from "@/components/organisms/TicketDetails"

const ClientPortalPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState("dashboard") // dashboard, create-ticket, ticket-details
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [loginError, setLoginError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple demo login - in real app, this would authenticate with backend
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true)
      setLoginError("")
    } else {
      setLoginError("Please enter both email and password")
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentView("dashboard")
    setSelectedTicket(null)
    setLoginData({ email: "", password: "" })
  }

  const handleCreateTicket = () => {
    setCurrentView("create-ticket")
  }

  const handleTicketCreated = () => {
    setCurrentView("dashboard")
  }

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket)
    setCurrentView("ticket-details")
  }

  const handleBackToDashboard = () => {
    setCurrentView("dashboard")
    setSelectedTicket(null)
  }

  const handleTicketUpdate = (updatedTicket) => {
    setSelectedTicket(updatedTicket)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="LogIn" className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 font-display">Client Portal Login</h1>
                <p className="text-gray-600 mt-2">Access your support tickets and account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <FormField
                  label="Email Address"
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                />

                <FormField
                  label="Password"
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter your password"
                />

                {loginError && (
                  <div className="text-red-600 text-sm">{loginError}</div>
                )}

                <Button type="submit" className="w-full">
                  <ApperIcon name="LogIn" className="w-5 h-5 mr-2" />
                  Sign In
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-600">
                  <p className="mb-2">Need help accessing your account?</p>
                  <a href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                    Contact Support
                  </a>
                </div>
              </div>

              {/* Demo Login Instructions */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm">
                  <p className="font-medium text-blue-900 mb-1">Demo Login:</p>
                  <p className="text-blue-700">Enter any email and password to access the portal</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <ApperIcon name="Settings" className="w-6 h-6 text-primary-600" />
              <h1 className="text-lg font-semibold text-gray-900">Client Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Client</span>
              <Button variant="ghost" onClick={handleLogout}>
                <ApperIcon name="LogOut" className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === "dashboard" && (
          <ClientPortalDashboard
            onCreateTicket={handleCreateTicket}
            onViewTicket={handleViewTicket}
          />
        )}

        {currentView === "create-ticket" && (
          <TicketForm
            onSuccess={handleTicketCreated}
            onCancel={handleBackToDashboard}
          />
        )}

        {currentView === "ticket-details" && selectedTicket && (
          <TicketDetails
            ticket={selectedTicket}
            onBack={handleBackToDashboard}
            onUpdate={handleTicketUpdate}
          />
        )}
      </div>
    </div>
  )
}

export default ClientPortalPage