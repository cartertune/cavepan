import { Router } from 'next/router'
import Logo from './Logo'

interface NavbarProps {
  path: string
}
function Navbar({ path }: NavbarProps) {
  return (
    <div className="container mx-auto py-4 px-5">
      <Logo />
    </div>
  )
}

export default Navbar
