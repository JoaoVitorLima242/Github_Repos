import { FlatList } from 'react-native'

// Types
import { IRepo } from '../../../types/repo'
// Components
import RepoCard from '../Card'

interface MyProps {
  repos: IRepo[]
}

const ReposList = ({
  repos
}: MyProps) => (
  <FlatList
    data={repos}
    keyExtractor={(item => item.id)}
    renderItem={({ item }) => (
      <RepoCard repo={item}/>
    )}
  />
)

export default ReposList
