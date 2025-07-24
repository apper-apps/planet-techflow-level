import Input from "@/components/atoms/Input"
import Textarea from "@/components/atoms/Textarea"
import Select from "@/components/atoms/Select"

const FormField = ({ 
  label, 
  type = "text", 
  error, 
  required = false, 
  children,
  ...props 
}) => {
  const renderInput = () => {
    if (type === "textarea") {
      return <Textarea {...props} className={error ? "border-red-500" : ""} />
    }
    
    if (type === "select") {
      return (
        <Select {...props} className={error ? "border-red-500" : ""}>
          {children}
        </Select>
      )
    }
    
    return <Input type={type} {...props} className={error ? "border-red-500" : ""} />
  }

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {renderInput()}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default FormField