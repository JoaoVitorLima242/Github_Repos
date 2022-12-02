import { ElementType } from 'react'

// Types
import { IRepo } from '../../../types/repo'
// Components
import RepoCard from '../Card'
// Styles
import * as S from './styles'

interface MyProps {
  repos: IRepo[]
  isFavorite?: boolean
}

const ReposList = ({
  repos,
  isFavorite
}: MyProps) => (
  <S.CustomFlatlist<ElementType>
    data={repos}
    keyExtractor={((item: IRepo) => item.id)}
    initialNumToRender={7}
    renderItem={({ item }: { item: IRepo }) => (
      <RepoCard isFavorite={isFavorite} repo={item}/>
    )}
  />
)

export default ReposList
