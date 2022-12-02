import { useRoute } from '@react-navigation/native'
import { Linking } from 'react-native'

// Components
import Title from '../../components/Repos/Title'
import TextWithIcon from '../../components/UI/TextWithIcon'
// Types
import { IRepo } from '../../types/repo'
// Styles
import { defaultTheme } from '../../styles/theme'
import * as S from './styles'
import Button from '../../components/UI/Button'

interface Router extends IRepo {}

const DetailsScreen = () => {
  const router = useRoute()

  const {
    description,
    full_name,
    language,
    html_url
  } = router.params as Router

  const languageColor = defaultTheme.colors.red
  const linkButtonColor = defaultTheme.colors.blue

  const favoriteButtonBackground = defaultTheme.colors.yellow
  const favoriteColor = defaultTheme.colors.font
  const favoriteText = 'Favoritar'

  const goToPageHandler = () => {
    Linking.openURL(html_url)
  }

  const favoriteButtonHandler = () => {
    // TODO
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
          icon='link'
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
