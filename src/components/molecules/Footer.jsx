import { Link } from "react-router-dom";
import React from "react";
import ApperIcon from "@/components/ApperIcon";
const Footer = () => {
  return (
<footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 flex items-center justify-center">
              <ApperIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">Techlopers</h3>
              <p className="text-xs text-gray-400">Solutions Pvt. Ltd.</p>
            </div>
            <div className="flex space-x-4">
<a 
                href="https://linkedin.com/company/techlopers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ApperIcon name="Linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Testimonials", path: "/testimonials" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Software & App Development</li>
              <li>ERP & IT Consulting</li>
              <li>Networking & Server Management</li>
              <li>Cybersecurity Solutions</li>
              <li>Hardware Procurement</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <ApperIcon name="MapPin" className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Noida, India</p>
                  <p className="text-gray-400">New York, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Mail" className="w-4 h-4 text-primary-400" />
                <a 
                  href="mailto:support@techlopers.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  support@techlopers.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Phone" className="w-4 h-4 text-primary-400" />
                <a 
                  href="tel:+91-11-4567-8900" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91-11-4567-8900
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Techlopers Solutions Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer