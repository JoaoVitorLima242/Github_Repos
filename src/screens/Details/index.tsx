import { Linking } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

// Components
import Title from '../../components/Repos/Title'
import TextWithIcon from '../../components/UI/TextWithIcon'
// Styles
import { defaultTheme } from '../../styles/theme'
import * as S from './styles'
import Button from '../../components/UI/Button'
import { useContext } from 'react'
import RepoContext from '../../contexts/Repos'
import { RootStackParamList } from '../../types/routes'

type Props = StackScreenProps<RootStackParamList, 'Details'>

const DetailsScreen = ({ route, navigation }: Props) => {
  const { addToFavoritesHandler } = useContext(RepoContext)

  const {
    description,
    full_name,
    language,
    html_url
  } = route.params

  const languageColor = defaultTheme.colors.red
  const linkButtonColor = defaultTheme.colors.blue

  const favoriteButtonBackground = defaultTheme.colors.yellow
  const favoriteColor = defaultTheme.colors.font
  const favoriteText = 'Favoritar'
  const favoriteIcon = 'star'

  const goToPageHandler = () => {
    Linking.openURL(html_url)
  }

  const favoriteButtonHandler = async () => {
    const repo = route.params
    addToFavoritesHandler(repo)
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
          textSize={15}
        />
      </S.ButtonsView>
    </S.Wrapper>
  )
}

export default DetailsScreen
