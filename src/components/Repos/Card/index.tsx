import { Text } from 'react-native'
import { IRepo } from '../../../types/repo'
import * as S from './styles'

interface MyProps {
  repo: IRepo
}

const RepoCard = ({
  repo
}: MyProps) => {
  const {
    full_name
  } = repo
  return (
    <S.Wrapper>
      <Text>{full_name}</Text>
    </S.Wrapper>
  )
}

export default RepoCard
