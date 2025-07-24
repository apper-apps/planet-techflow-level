import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Select from "@/components/atoms/Select"
import TestimonialCard from "@/components/molecules/TestimonialCard"
import testimonialsService from "@/services/api/testimonialsService"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await testimonialsService.getAll()
      setTestimonials(data)
    } catch (err) {
      setError("Failed to load testimonials. Please try again.")
      console.error("Error loading testimonials:", err)
    } finally {
      setLoading(false)
    }
  }

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === "all") return true
    if (filter === "5-star") return testimonial.rating === 5
    if (filter === "4-star") return testimonial.rating === 4
    return true
  })

  const stats = {
    total: testimonials.length,
    averageRating: testimonials.length > 0 
      ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
      : 0,
    fiveStars: testimonials.filter(t => t.rating === 5).length,
    fourStars: testimonials.filter(t => t.rating === 4).length
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadTestimonials} />

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
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Discover what our clients say about our services. Real feedback from businesses 
              that have transformed their operations with our IT solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.total}</div>
              <div className="text-gray-600">Total Reviews</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-primary-600 mr-2">{stats.averageRating}</span>
                <ApperIcon name="Star" className="w-8 h-8 text-yellow-400 fill-current" />
              </div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stats.fiveStars}</div>
              <div className="text-gray-600">5-Star Reviews</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4 md:mb-0 font-display"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What Our <span className="gradient-text">Clients Say</span>
            </motion.h2>
            
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <label className="text-sm font-medium text-gray-700">Filter by Rating:</label>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-40"
              >
                <option value="all">All Reviews</option>
                <option value="5-star">5 Stars</option>
                <option value="4-star">4 Stars</option>
              </Select>
            </motion.div>
          </div>

          {/* Results Count */}
          <motion.div 
            className="text-sm text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Showing {filteredTestimonials.length} of {testimonials.length} testimonials
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.Id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Ready to Join Our <span className="gradient-text">Success Stories</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the same level of excellence that our clients rave about. 
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="MessageSquare" className="w-5 h-5 mr-2" />
                Start Your Project
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="ArrowRight" className="w-5 h-5 mr-2" />
                View Our Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage