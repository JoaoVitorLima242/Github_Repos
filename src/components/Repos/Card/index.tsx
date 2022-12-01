
import { IRepo } from '../../../types/repo'
import Title from '../Title'
import * as S from './styles'

interface MyProps {
  repo: IRepo
}

const RepoCard = ({
  repo
}: MyProps) => {
  const {
    full_name = ''
  } = repo

  return (
    <S.Wrapper>
      <S.TitleSection>
        <Title full_name={full_name}/>
      </S.TitleSection>
    </S.Wrapper>
  )
}

export default RepoCard
