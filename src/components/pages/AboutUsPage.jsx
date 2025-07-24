import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"
import Card from "@/components/atoms/Card"

const AboutUsPage = () => {
  const milestones = [
    { year: "2014", title: "Company Founded", description: "Techlopers Solutions was established with a vision to provide reliable IT services" },
    { year: "2016", title: "Official Registration", description: "Formally registered under the Companies Act, marking our commitment to excellence" },
    { year: "2018", title: "Global Expansion", description: "Opened our first international office in New York, USA" },
    { year: "2020", title: "Digital Transformation", description: "Helped 100+ businesses adapt to digital-first operations during the pandemic" },
    { year: "2024", title: "Innovation Leader", description: "Recognized as a leading IT solutions provider serving clients across multiple continents" }
  ]

  const values = [
    {
      icon: "Shield",
      title: "Trust & Reliability",
      description: "We build lasting relationships through consistent, dependable service delivery and transparent communication."
    },
    {
      icon: "TrendingUp",
      title: "Scalability",
      description: "Our solutions grow with your business, ensuring long-term success and adaptability to changing needs."
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that drive competitive advantage."
    },
    {
      icon: "Users",
      title: "Client-Centric",
      description: "Your success is our priority. We tailor every solution to meet your specific business requirements."
    }
  ]

  const employeeTestimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Developer",
      content: "Excellent learning opportunities and positive team culture. The company truly cares about employee growth and development."
    },
    {
      name: "Rahul Gupta",
      role: "IT Consultant",
      content: "Working at Techlopers has been incredibly rewarding. The collaborative environment and challenging projects keep me motivated every day."
    },
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      content: "The international exposure and diverse client portfolio make this an exciting place to build a career in technology."
    }
  ]

  const clientTestimonials = [
    {
      name: "Michael Chen",
      company: "TechStart Inc.",
      content: "Techlopers transformed our IT infrastructure completely. Their expertise and support have been invaluable to our growth."
    },
    {
      name: "Lisa Rodriguez",
      company: "Global Logistics Corp",
      content: "Professional service delivery and proactive support. They understand our business needs and deliver solutions that work."
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
              About <span className="gradient-text">Techlopers Solutions</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Founded in 2014 and officially registered in 2016, we are a trusted IT solutions provider 
              delivering end-to-end technology services to clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Techlopers Solutions began as a vision to bridge the gap between complex technology 
                  and business success. Since our founding in 2014, we have grown from a small startup 
                  to a globally recognized IT solutions provider.
                </p>
                <p>
                  Our official registration under the Companies Act in 2016 marked our commitment to 
                  formal excellence and regulatory compliance. Today, with offices in India and the USA, 
                  we serve clients across multiple continents with the same dedication to quality and innovation.
                </p>
                <p>
                  What sets us apart is our unwavering focus on understanding each client's unique challenges 
                  and delivering tailored solutions that drive real business results. We don't just provide 
                  technology; we provide transformation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="p-8 bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-900 mb-2">10+</div>
                    <div className="text-primary-700 text-sm">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-900 mb-2">500+</div>
                    <div className="text-primary-700 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-900 mb-2">50+</div>
                    <div className="text-primary-700 text-sm">Global Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-900 mb-2">2</div>
                    <div className="text-primary-700 text-sm">Office Locations</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Our <span className="gradient-text">Mission & Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name="Target" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-display">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses with reliable, scalable, and innovative IT solutions that drive 
                  digital transformation and sustainable growth. We are committed to building long-term 
                  partnerships based on trust, excellence, and measurable results.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-4">
                    <ApperIcon name="Eye" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-display">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be the most trusted global technology partner, recognized for our ability to transform 
                  business challenges into competitive advantages through cutting-edge solutions and 
                  exceptional service delivery.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 font-display">Core Values</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center card-hover">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={value.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6">
                      <div className="flex items-center mb-3">
                        <div className={`w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold ${index % 2 === 0 ? 'ml-auto mr-3' : 'mr-auto ml-3 order-first'}`}>
                          <span>{milestone.year.slice(-2)}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Presence */}
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
              Global <span className="gradient-text">Presence</span>
            </h2>
            <p className="text-xl text-gray-600">Serving clients from our strategic locations</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 text-center card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name="MapPin" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">India Office</h3>
                <p className="text-gray-600 mb-4">Our headquarters in Noida serves as the hub for development and operations</p>
                <div className="text-sm text-gray-500">
                  <p>Noida, Uttar Pradesh, India</p>
                  <p>Primary development center</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 text-center card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name="Building" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">USA Office</h3>
                <p className="text-gray-600 mb-4">Our New York office focuses on client relations and business development</p>
                <div className="text-sm text-gray-500">
                  <p>New York, USA</p>
                  <p>Client services & business development</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
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
              What Our <span className="gradient-text">Team Says</span>
            </h2>
            <p className="text-xl text-gray-600">Insights from our talented team members</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {employeeTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <blockquote className="text-gray-600 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Client Testimonials */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 font-display">Client Feedback</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <blockquote className="text-gray-600 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage