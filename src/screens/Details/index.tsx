import { Linking } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

// Components
import Title from '../../components/Repos/Title'
import TextWithIcon from '../../components/UI/TextWithIcon'
// Styles
import { defaultTheme } from '../../styles/theme'
import * as S from './styles'
import Button from '../../components/UI/Button'
import { useContext, useEffect, useState } from 'react'
import RepoContext from '../../contexts/Repos'
import { RootStackParamList } from '../../types/routes'

type Props = StackScreenProps<RootStackParamList, 'Details'>

const DetailsScreen = ({ route, navigation }: Props) => {
  const { addToFavoritesHandler, favorites, removeFromFavoritesHandler } = useContext(RepoContext)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const repo = route.params
    const index = favorites.findIndex(prevRepo => prevRepo.id === repo.id)
    const exist = index >= 0

    setIsFavorite(exist)
  }, [favorites])

  const {
    description,
    full_name,
    language,
    html_url
  } = route.params

  const languageColor = defaultTheme.colors.red
  const linkButtonColor = defaultTheme.colors.blue

  const favoriteColor = defaultTheme.colors.font
  const favoriteButtonBackground = isFavorite ? 'transparent' : defaultTheme.colors.yellow
  const favoriteText = isFavorite ? 'DESFAVORITAR' : 'FAVORITAR'
  const favoriteIcon = isFavorite ? 'star-outline' : 'star'

  const goToPageHandler = () => {
    Linking.openURL(html_url)
  }

  const favoriteButtonHandler = () => {
    const repo = route.params

    if (isFavorite) {
      removeFromFavoritesHandler(repo)
    } else {
      addToFavoritesHandler(repo)
    }
  }

  return (
    <S.Wrapper>
      <Title fullName={full_name} fontSize={20}/>
      {description && <S.InfoText>{description}</S.InfoText>}
      <S.InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.</S.InfoText>
      <S.LanguageContainer>
        <TextWithIcon
          text={language}
          icon="circle"
          iconColor={languageColor}
          iconSize={12}
        />
      </S.LanguageContainer>
      <S.ButtonsView>
        <Button
          icon='link'
          text='Ver repositório'
          color={linkButtonColor}
          backgroundColor="transparent"
          iconSide='right'
          onPress={goToPageHandler}
          textSize={15}
        />
        <Button
          icon={favoriteIcon}
          text={favoriteText}
          color={favoriteColor}
          backgroundColor={favoriteButtonBackground}
          iconSide='right'
          onPress={favoriteButtonHandler}
          outline={isFavorite}
          textSize={15}
        />
      </S.ButtonsView>
    </S.Wrapper>
  )
}

export default DetailsScreen
