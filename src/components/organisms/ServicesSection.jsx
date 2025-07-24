import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import ServiceCard from "@/components/molecules/ServiceCard"
import servicesService from "@/services/api/servicesService"
import { useEffect, useState } from "react"

const ServicesSection = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await servicesService.getAll()
        setServices(data.slice(0, 3)) // Show first 3 services
      } catch (error) {
        console.error("Error loading services:", error)
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  }, [])

  const handleGetQuote = (service) => {
    // Navigate to contact page with service pre-selected
    window.location.href = `/contact?service=${encodeURIComponent(service.title)}`
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-shimmer"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-shimmer"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="h-16 w-16 bg-gray-200 rounded-xl mb-6 animate-shimmer"></div>
                <div className="h-6 bg-gray-200 rounded mb-4 animate-shimmer"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded animate-shimmer"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-shimmer"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded animate-shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to meet your business needs and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/services">
            <Button size="lg">
              <ApperIcon name="ArrowRight" className="w-5 h-5 mr-2" />
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection