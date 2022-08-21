import { useRouter } from 'next/router'
import React from 'react'
import { NavBarRoutes } from '../constants/routes'

interface NavBarLinkProps {
  navKey: string
}
const NavBarLink = (props: NavBarLinkProps) => {
  const { navKey } = props
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(NavBarRoutes[navKey].navUrl)
  }
  return (
    <a href={NavBarRoutes[navKey].navUrl} onClick={handleClick}>
      {NavBarRoutes[navKey].navBarTitle}
    </a>
  )
}

export default NavBarLink
