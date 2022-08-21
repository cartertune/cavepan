import Logo from './Logo'
import _ from 'lodash'
import { NavBarRoutes } from '../constants/routes'
import NavBarLink from './NavBarLink'

interface Props {
  path: string
}

function Header({ path }: Props) {
  return (
    <div className="w-100 container mx-auto flex justify-between py-4 px-5">
      <Logo />
      {_.map(_.keys(NavBarRoutes), (navKey) => (
        <NavBarLink navKey={navKey} />
      ))}
    </div>
  )
}

export default Header
