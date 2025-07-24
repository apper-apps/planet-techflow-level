import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import TestimonialCard from "@/components/molecules/TestimonialCard"
import testimonialsService from "@/services/api/testimonialsService"

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await testimonialsService.getAll()
        setTestimonials(data.slice(0, 4))
      } catch (error) {
        console.error("Error loading testimonials:", error)
      } finally {
        setLoading(false)
      }
    }

    loadTestimonials()
  }, [])

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4 animate-shimmer"></div>
            <div className="space-y-2 max-w-3xl mx-auto">
              <div className="h-6 bg-gray-200 rounded animate-shimmer"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-shimmer"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6 space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-5 h-5 bg-yellow-200 rounded animate-shimmer"></div>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                <div className="h-5 bg-gray-200 rounded animate-shimmer"></div>
                <div className="h-5 bg-gray-200 rounded animate-shimmer"></div>
                <div className="h-5 bg-gray-200 rounded w-3/4 animate-shimmer"></div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 animate-shimmer"></div>
                <div className="space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-40 animate-shimmer"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 animate-shimmer"></div>
                </div>
              </div>
            </div>

            {/* Navigation Skeleton */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-200 rounded-full animate-shimmer"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-200 rounded-full animate-shimmer"></div>

            {/* Dots Skeleton */}
            <div className="flex justify-center mt-8 space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-3 h-3 bg-gray-200 rounded-full animate-shimmer"></div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="h-12 bg-gray-200 rounded-lg w-64 mx-auto animate-shimmer"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses worldwide for reliable IT solutions and exceptional service
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
          >
            <ApperIcon name="ChevronLeft" className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200"
          >
            <ApperIcon name="ChevronRight" className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/testimonials">
            <Button variant="outline">
              <ApperIcon name="MessageCircle" className="w-5 h-5 mr-2" />
              Read More Testimonials
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection