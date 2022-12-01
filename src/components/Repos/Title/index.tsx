import { sepateFullName } from '../../../helpers/string'
import * as S from './styles'

interface MyProps {
  full_name: string
}

const Title = ({ full_name }: MyProps) => {
  const { authorName, repoName } = sepateFullName(full_name)
  return (
    <S.Wrapper>
      <S.AuthorName>{authorName}/</S.AuthorName>
      <S.RepoName>{repoName}</S.RepoName>
    </S.Wrapper>
  )
}

export default Title
