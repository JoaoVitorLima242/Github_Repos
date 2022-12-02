import { useEffect, useState } from 'react'

import ReposList from '../../components/Repos/List'
import api from '../../services'
import { IRepo } from '../../types/repo'

const ReposScreen = () => {
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

  return <ReposList repos={repos}/>
}

export default ReposScreen
