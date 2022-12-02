
import { Image } from 'react-native'

// Types
import { IRepo } from '../../../types/repo'
import Button from '../../UI/Button'
// Components
import Title from '../Title'
import TextWithIcon from '../../UI/TextWithIcon'
// Styles
import * as S from './styles'
import { defaultTheme } from '../../../styles/theme'

interface MyProps {
  repo: IRepo
}

const RepoCard = ({
  repo
}: MyProps) => {
  const {
    full_name,
    description,
    stargazers_count,
    language
  } = repo

  const buttonBackground = defaultTheme.colors.yellowLight
  const favoriteColor = defaultTheme.colors.yellow
  const languageIconColor = defaultTheme.colors.red

  return (
    <S.Wrapper>
      <S.TitleSection>
        <Title fullName={full_name}/>
        <Image source={require('../../../assets/smallLogo.png')}/>
      </S.TitleSection>
      {description &&
        <S.InfoSection>
          <S.DescriptionText>{description}</S.DescriptionText>
        </S.InfoSection>
      }
      <S.FooterSection>
        <Button
          backgroundColor={buttonBackground}
          color={favoriteColor}
          text='Favoritar'
          icon='star'
        />
        <TextWithIcon
          icon='star'
          iconColor={favoriteColor}
          iconSize={16.67}
          text={stargazers_count ?? 0}
        />
        <TextWithIcon
          text={language}
          iconColor={languageIconColor}
          iconSize={8}
          icon='circle'
        />
      </S.FooterSection>
    </S.Wrapper>
  )
}

export default RepoCard
