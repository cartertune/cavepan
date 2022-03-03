interface ButtonProps {
  onClick: any
  children: any
  className: string
}
function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
