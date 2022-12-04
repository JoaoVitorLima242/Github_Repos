import { ReactNode } from 'react'

// Types
import { IRepo } from '../../types/repo'

export interface IRepoContext {
  favorites: IRepo[]
  modal: boolean
  usernameSelected: string
  addToFavoritesHandler: (repo: IRepo) => void
  removeFromFavoritesHandler: (repo: IRepo) => void
  selectUsernameHandler: (username: string) => void
  modalHandler: (openOrClose: boolean) => void
}

export interface IRepoContextProvider {
  children: ReactNode
}
