import { ReactNode } from 'react'

// Types
import { IRepo } from '../../types/repo'

export interface IRepoContext {
  favorites: IRepo[]
  addToFavoritesHandler: (repo: IRepo) => void
  removeFromFavoritesHandler: (repo: IRepo) => void
}

export interface IRepoContextProvider {
  children: ReactNode
}
