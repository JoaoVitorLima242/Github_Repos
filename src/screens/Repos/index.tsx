import { useContext } from 'react'

import ReposList from '../../components/Repos/List'
import RepoContext from '../../contexts/Repos'

const ReposScreen = () => {
  const { repos } = useContext(RepoContext)

  return <ReposList repos={repos}/>
}

export default ReposScreen
