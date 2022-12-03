import { ReactNode } from 'react'

// Types
import { IRepo } from '../../types/repo'

export interface IRepoContext {
  favorites: IRepo[]
  selectorModal: boolean
  usernameSelected: string
  addToFavoritesHandler: (repo: IRepo) => void
  removeFromFavoritesHandler: (repo: IRepo) => void
  selectorModalHandler: (username: string) => void
}

export interface IRepoContextProvider {
  children: ReactNode
}
