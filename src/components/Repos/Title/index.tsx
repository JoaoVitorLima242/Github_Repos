import { sepateFullName } from '../../../helpers/string'
import * as S from './styles'

interface MyProps {
  fullName: string
  fontSize?: number
}

const Title = ({ fullName, fontSize }: MyProps) => {
  const { authorName, repoName } = sepateFullName(fullName)
  return (
    <S.Wrapper>
      <S.AuthorName fontSize={fontSize}>{authorName}/</S.AuthorName>
      <S.RepoName fontSize={fontSize}>{repoName}</S.RepoName>
    </S.Wrapper>
  )
}

export default Title
