import { ReactNode } from 'react'

// Types
import { IRepo } from '../../types/repo'

export interface IRepoContext {
  favorites: IRepo[]
}

export interface IRepoContextProvider {
  children: ReactNode
}
