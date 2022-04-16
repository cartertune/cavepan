import React from 'react'
import { NavBarRoutes, RootRoute } from '../constants/routes'

interface NavBarLinkProps {
  navKey: RootRoute
}
const NavBarLink = (props: NavBarLinkProps) => {
  const { navKey } = props
  const history = useHistory()
  return <div onClick={() => history.push(NavBarRoutes[navKey].navUrl)}></div>
}

export default NavBarLink
