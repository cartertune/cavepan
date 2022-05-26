import React from 'react'
import { NavBarRoutes } from '../constants/routes'

interface NavBarLinkProps {
  navKey: string
}
const NavBarLink = (props: NavBarLinkProps) => {
  const { navKey } = props
  const history = useHistory()
  return <div onClick={() => history.push(NavBarRoutes[navKey].navUrl)}></div>
}

export default NavBarLink
