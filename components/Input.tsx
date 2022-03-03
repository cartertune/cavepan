interface InputProps {
  onChange: any
  children?: any
  type: string
  className: string
  value: string
  placeholder?: string
}
function Input({
  onChange,
  className,
  value,
  children,
  placeholder,
  type,
}: InputProps) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      className={className}
      placeholder={placeholder}
    >
      {children}
    </input>
  )
}

export default Input
