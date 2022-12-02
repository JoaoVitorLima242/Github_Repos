import { createContext, useState } from 'react'

// Services
import api from '../../services'
// Types
import { IRepo } from '../../types/repo'
import { IRepoContext, IRepoContextProvider } from './types'

export const RepoContext = createContext({} as IRepoContext)

export const RepoContextProvider = ({ children }: IRepoContextProvider) => {
  const [favorites, setFavorites] = useState<IRepo[]>([])

  const addToFavoritesHandler = () => {}

  const values = {
    favorites
  }

  return (
    <RepoContext.Provider value={values}>
      {children}
    </RepoContext.Provider>
  )
}

export default RepoContext
