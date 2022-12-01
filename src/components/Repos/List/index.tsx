import { FlatList, View } from 'react-native'

// Types
import { IRepo } from '../../../types/repo'

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
      <View></View>
    )}
  />
)

export default ReposList
