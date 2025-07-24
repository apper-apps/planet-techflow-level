import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Card from "@/components/atoms/Card"

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <ApperIcon 
        key={i}
        name="Star" 
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} 
      />
    ))
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 h-full">
        <div className="flex items-center mb-4">
          {renderStars(testimonial.rating)}
        </div>
        
        <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
          "{testimonial.content}"
        </blockquote>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-semibold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">
              {testimonial.role} • {testimonial.company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default TestimonialCard