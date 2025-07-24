import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import ApperIcon from "@/components/ApperIcon"
import ServiceCard from "@/components/molecules/ServiceCard"
import servicesService from "@/services/api/servicesService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const ServicesPage = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await servicesService.getAll()
      setServices(data)
    } catch (err) {
      setError("Failed to load services. Please try again.")
      console.error("Error loading services:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleGetQuote = (service) => {
    toast.success(`Quote request for ${service.title} will be processed shortly!`)
    // In a real app, this would navigate to contact form or open a modal
    window.location.href = `/contact?service=${encodeURIComponent(service.title)}`
  }

  const benefits = [
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "Advanced security measures to protect your business data and infrastructure"
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly"
    },
    {
      icon: "TrendingUp",
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs and adapt to market changes"
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "Certified professionals with extensive experience in enterprise technology"
    }
  ]

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadServices} />

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
              Our <span className="gradient-text">IT Services</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive your business forward. 
              From software development to cybersecurity, we provide end-to-end IT services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Complete <span className="gradient-text">Technology Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT services, each designed to address 
              specific business challenges and drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard 
                  service={service} 
                  onGetQuote={handleGetQuote}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Why Choose <span className="gradient-text">Techlopers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver more than just technology solutions – we provide strategic partnerships 
              that drive long-term business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-display">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your business needs and current technology landscape"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Create detailed project plans with timelines and deliverables"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute the solution with regular updates and quality checkpoints"
              },
              {
                step: "04",
                title: "Support",
                description: "Provide ongoing maintenance and optimization services"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-display">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300 relative">
                      <ApperIcon name="ArrowRight" className="absolute top-0 right-0 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-display">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT solutions can help you achieve your business goals. 
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="MessageSquare" className="w-5 h-5 mr-2" />
                Get Free Consultation
              </motion.a>
              <motion.a
                href="/client-portal"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="LogIn" className="w-5 h-5 mr-2" />
                Client Portal
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage