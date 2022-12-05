import { useContext, useEffect, useState } from 'react'

// Components
import ReposList from '../../components/Repos/List'
import FallbackView from '../../components/UI/FallbackView'
import LoadingOverlay from '../../components/UI/LoadingOverlay'
import RepoContext from '../../contexts/Repos'
// Services
import api from '../../services'
// Types
import { IRepo } from '../../types/repo'

const ReposScreen = () => {
  const { usernameSelected } = useContext(RepoContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [repos, setRepos] = useState<IRepo[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true)
      setError(false)

      api.get<IRepo[]>(`${usernameSelected}/repos`)
        .then(({ data }) => {
          setRepos(data)
          setLoading(false)
        })
        .catch(() => {
          setError(true)
          setLoading(false)
        })
    }

    if (usernameSelected) fetchRepos()
  }, [usernameSelected])

  if (loading) return <LoadingOverlay />

  if (!usernameSelected) {
    return <FallbackView
      title='Selecione um repositório!'
      message='Aperte no botão de engrenagem no canto superior direito para escolher um usuário'
    />
  }

  if (error) {
    return <FallbackView
      title='Erro ao buscar os repositórios.'
      message='Por favor verifique se escolheu o usuário correto ou se está conectado com a internet.'
    />
  }

  return <ReposList repos={repos}/>
}

export default ReposScreen
