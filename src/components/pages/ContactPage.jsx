import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"
import FormField from "@/components/molecules/FormField"
import contactService from "@/services/api/contactService"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    // Pre-fill service if coming from service page
    const urlParams = new URLSearchParams(window.location.search)
    const service = urlParams.get("service")
    if (service) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in learning more about your ${service} services. Please contact me to discuss my requirements.`
      }))
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.email.includes("@")) newErrors.email = "Please enter a valid email"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setLoading(true)
      const contactData = {
        ...formData,
        timestamp: new Date().toISOString()
      }
      
      await contactService.create(contactData)
      toast.success("Thank you for your message! We'll get back to you within 24 hours.")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setErrors({})
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
      console.error("Error sending message:", error)
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

  const offices = [
    {
      location: "India Office",
      address: "Noida, Uttar Pradesh, India",
      description: "Development Center & Headquarters",
      icon: "MapPin",
      color: "from-orange-500 to-red-600"
    },
    {
      location: "USA Office", 
      address: "New York, USA",
      description: "Client Services & Business Development",
      icon: "Building",
      color: "from-blue-500 to-purple-600"
    }
  ]

  const contactMethods = [
    {
      icon: "Mail",
      title: "Email Us",
      info: "support@techlopers.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: "Phone",
      title: "Call Us",
      info: "+91-11-4567-8900",
      description: "Monday to Friday, 9 AM - 6 PM IST"
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      info: "Available on website",
      description: "Instant support during business hours"
    }
  ]

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 font-display">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with our IT solutions? Contact us today for a 
              free consultation and discover how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Multiple Ways to <span className="gradient-text">Reach Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center card-hover">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={method.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-primary-600 font-medium mb-2">{method.info}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormField
                    label="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    error={errors.name}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Email Address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      error={errors.email}
                    />

                    <FormField
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <FormField
                    label="Message"
                    type="textarea"
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project or requirements..."
                    error={errors.message}
                    rows={6}
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="Send" className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">
                  Our Office Locations
                </h2>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={office.location} className="p-6">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-gradient-to-br ${office.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                          <ApperIcon name={office.icon} className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{office.location}</h3>
                          <p className="text-gray-600 mb-2">{office.address}</p>
                          <p className="text-sm text-gray-500">{office.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Find Us on Map</h3>
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ApperIcon name="MapPin" className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Google Maps integration would be here</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-display">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of satisfied clients who trust Techlopers with their IT needs. 
              Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <ApperIcon name="MessageSquare" className="w-5 h-5 mr-2" />
                Send Message Now
              </Button>
              <a
                href="/client-portal"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                <ApperIcon name="LogIn" className="w-5 h-5 mr-2" />
                Access Client Portal
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage