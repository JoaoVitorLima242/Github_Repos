import { useContext } from 'react'

import ReposList from '../../components/Repos/List'
import RepoContext from '../../contexts/Repos'

const FavoritesScreen = () => {
  const { repos } = useContext(RepoContext)

  return <ReposList repos={repos}/>
}

export default FavoritesScreen
