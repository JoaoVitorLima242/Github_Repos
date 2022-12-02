/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Details: IRepo
      Repos: undefined
      Favorites: undefined
    }
  }
}

export type RootStackParamList = {
  Tabs: undefined
  Details: IRepo
}

export type BottomTabParamList = {
  Repos: undefined
  Favorites: undefined
}
