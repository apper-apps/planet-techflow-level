import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold font-display leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="gradient-text">Reliable IT Solutions</span>
                <br />
                for Modern Businesses
              </motion.h1>
              
              <motion.p 
                className="text-xl text-primary-100 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Techlopers Solutions delivers end-to-end technology services to clients globally. 
                Founded in 2014 and registered in 2016, we focus on trust, scalability, and 
                innovative solutions that drive your business forward.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <ApperIcon name="MessageSquare" className="w-5 h-5 mr-2" />
                  Request a Quote
                </Button>
              </Link>
              <Link to="/client-portal">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white hover:text-primary-900">
                  <ApperIcon name="LogIn" className="w-5 h-5 mr-2" />
                  Client Portal Login
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-600/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-primary-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-primary-200 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-primary-200 text-sm">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Code" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Development</h3>
                    <p className="text-primary-200 text-sm">Custom software solutions</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Shield" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Security</h3>
                    <p className="text-primary-200 text-sm">Enterprise cybersecurity</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Server" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Infrastructure</h3>
                    <p className="text-primary-200 text-sm">Server management</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Settings" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Consulting</h3>
                    <p className="text-primary-200 text-sm">ERP & IT advisory</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection