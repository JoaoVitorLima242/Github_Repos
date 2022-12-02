
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
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import RepoContext from '../../../contexts/Repos'

interface MyProps {
  repo: IRepo
  isFavorite?: boolean
}

const RepoCard = ({
  repo,
  isFavorite
}: MyProps) => {
  const navigation = useNavigation()
  const { addToFavoritesHandler } = useContext(RepoContext)

  const {
    full_name,
    description,
    stargazers_count,
    language,
    html_url,
    id,
    owner
  } = repo

  const buttonBackground = defaultTheme.colors.yellowLight
  const favoriteColor = defaultTheme.colors.yellow
  const languageIconColor = defaultTheme.colors.red

  const onPressWrapperHandler = () => {
    navigation.navigate('Details', {
      full_name,
      description,
      stargazers_count,
      language,
      html_url,
      id,
      owner
    })
  }

  const onFavoriteHandler = () => {
    addToFavoritesHandler(repo)
  }

  return (
    <S.Wrapper
      onPress={onPressWrapperHandler}
      activeOpacity={0.7}
    >
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
        {
          !isFavorite &&
          <Button
            backgroundColor={buttonBackground}
            color={favoriteColor}
            text='Favoritar'
            icon='star'
            onPress={onFavoriteHandler}
          />

        }
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
