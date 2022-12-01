
import { Image } from 'react-native'

// Types
import { IRepo } from '../../../types/repo'
// Components
import Title from '../Title'
// Styles
import * as S from './styles'

interface MyProps {
  repo: IRepo
}

const RepoCard = ({
  repo
}: MyProps) => {
  const {
    full_name,
    description
  } = repo

  return (
    <S.Wrapper>
      <S.TitleSection>
        <Title fullName={full_name}/>
        <Image source={require('../../../assets/smallLogo.png')}/>
      </S.TitleSection>
      <S.InfoSection>
        <S.DescriptionText>{description}</S.DescriptionText>
      </S.InfoSection>
    </S.Wrapper>
  )
}

export default RepoCard
