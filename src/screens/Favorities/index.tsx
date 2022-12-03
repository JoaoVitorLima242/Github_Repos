import { useContext } from 'react'

// Components
import ReposList from '../../components/Repos/List'
import FallbackView from '../../components/UI/FallbackView'
// Contexts
import RepoContext from '../../contexts/Repos'

const FavoritesScreen = () => {
  const { favorites } = useContext(RepoContext)

  if (favorites.length <= 0) {
    return <FallbackView
      title='Você não tem repositórios favoritos!'
      message='Você pode favoritar os repositórios clicando no botão favoritar'
    />
  }

  return <ReposList repos={favorites} />
}

export default FavoritesScreen
