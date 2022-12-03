import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useEffect, useState } from 'react'

// Types
import { IRepo } from '../../types/repo'
import { IRepoContext, IRepoContextProvider } from './types'

export const RepoContext = createContext({} as IRepoContext)

export const RepoContextProvider = ({ children }: IRepoContextProvider) => {
  const [favorites, setFavorites] = useState<IRepo[]>([])
  const [selectorModal, setSelectorModal] = useState(false)
  const [usernameSelected, setUsernameSelected] = useState('')

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await AsyncStorage.getItem('favorites')
      const parsedFavorites = JSON.parse(favorites!) || []

      setFavorites(parsedFavorites)
    }

    fetchFavorites()
  }, [])

  const selectorModalHandler = (username?: string) => {
    if (username) {
      setUsernameSelected(username)
    }

    setSelectorModal(!selectorModal)
  }

  const addToFavoritesHandler = (repo: IRepo) => {
    const newFavorites = [repo, ...favorites]

    setFavorites(newFavorites)
    AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const removeFromFavoritesHandler = (repo: IRepo) => {
    const newFavorites = favorites.filter(prevRepo => prevRepo.id !== repo.id)

    setFavorites(newFavorites)
    AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const values = {
    favorites,
    selectorModal,
    usernameSelected,
    addToFavoritesHandler,
    removeFromFavoritesHandler,
    selectorModalHandler
  }

  return (
    <RepoContext.Provider value={values}>
      {children}
    </RepoContext.Provider>
  )
}

export default RepoContext
