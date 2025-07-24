import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:ring-primary-500",
    secondary: "bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-500 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:ring-accent-500",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white shadow-md hover:shadow-lg transform hover:scale-[1.02] focus:ring-primary-500",
    ghost: "text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:ring-primary-500"
  }
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button