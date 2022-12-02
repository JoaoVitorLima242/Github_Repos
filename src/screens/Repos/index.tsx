import { useEffect, useState } from 'react'

// Components
import ReposList from '../../components/Repos/List'
import LoadingOverlay from '../../components/UI/LoadingOverlay'
// Services
import api from '../../services'
// Types
import { IRepo } from '../../types/repo'

const ReposScreen = () => {
  const [loading, setLoading] = useState(true)
  const [repos, setRepos] = useState<IRepo[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      api.get<IRepo[]>('JoaoVitorLima242/repos')
        .then(({ data }) => {
          setRepos(data)
          setLoading(false)
        })
        .catch(() => {
          console.log('TODO')
        })
    }

    fetchRepos()
  }, [])

  if (loading) return <LoadingOverlay />

  return <ReposList repos={repos}/>
}

export default ReposScreen
