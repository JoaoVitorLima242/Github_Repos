import { FlatList, View } from 'react-native'

const ReposList = () => (
  <FlatList
    data={[]}
    renderItem={() => (
      <View></View>
    )}
  />
)

export default ReposList
