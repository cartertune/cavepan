export enum RootRoute {
  HOME = 'HOME',
  FOOD_CATALOG = 'FOOD_CATALOG',
}

export interface NavBarRoute {
  navBarTitle: string
  navUrl: string
}

export const NavBarRoutes: { [key: string]: NavBarRoute } = {
  [RootRoute.FOOD_CATALOG]: {
    navBarTitle: 'Catalog',
    navUrl: '/food-catalog',
  },
}
