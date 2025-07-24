import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Input = forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white",
        "focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input