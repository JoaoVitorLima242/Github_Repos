import { ElementType } from 'react'

// Types
import { IRepo } from '../../../types/repo'
// Components
import RepoCard from '../Card'
// Styles
import * as S from './styles'

interface MyProps {
  repos: IRepo[]
}

const ReposList = ({
  repos
}: MyProps) => (
  <S.CustomFlatlist<ElementType>
    data={repos}
    keyExtractor={((item: IRepo) => item.id)}
    renderItem={({ item }: { item: IRepo }) => (
      <RepoCard repo={item}/>
    )}
  />
)

export default ReposList
