import { createContext, useEffect, useState } from 'react'

// Services
import api from '../../services'
// Types
import { IRepo } from '../../types/repo'
import { IRepoContext, IRepoContextProvider } from './types'

export const RepoContext = createContext({} as IRepoContext)

export const RepoContextProvider = ({ children }: IRepoContextProvider) => {
  const [repos, setRepos] = useState<IRepo[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      api.get<IRepo[]>('JoaoVitorLima242/repos')
        .then(({ data }) => setRepos(data))
        .catch(() => {
          console.log('TODO')
        })
    }

    fetchRepos()
  }, [])

  const values = {
    repos
  }

  return (
    <RepoContext.Provider value={values}>
      {children}
    </RepoContext.Provider>
  )
}

export default RepoContext
