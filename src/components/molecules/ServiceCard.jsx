import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"

const ServiceCard = ({ service, onGetQuote }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-8 h-full flex flex-col card-hover">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
            <ApperIcon name={service.icon} className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-display">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <ApperIcon name="CheckCircle" className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          onClick={() => onGetQuote(service)}
          className="w-full"
        >
          Get a Quote
        </Button>
      </Card>
    </motion.div>
  )
}

export default ServiceCard