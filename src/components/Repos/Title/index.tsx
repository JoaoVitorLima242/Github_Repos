import { sepateFullName } from '../../../helpers/string'
import * as S from './styles'

interface MyProps {
  fullName: string
}

const Title = ({ fullName }: MyProps) => {
  const { authorName, repoName } = sepateFullName(fullName)
  return (
    <S.Wrapper>
      <S.AuthorName>{authorName}/</S.AuthorName>
      <S.RepoName>{repoName}</S.RepoName>
    </S.Wrapper>
  )
}

export default Title
