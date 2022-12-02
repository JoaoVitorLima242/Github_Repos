import { FontAwesome } from '@expo/vector-icons'

// Styles
import * as S from './styles'

interface Props {
  icon: keyof typeof FontAwesome.glyphMap
  iconSize: number
  iconColor: string
  text: string | number
}

const TextWithIcon = ({
  icon,
  iconSize,
  iconColor,
  text
}: Props) => {
  return (
    <S.Wrapper>
      <FontAwesome name={icon} size={iconSize} color={iconColor}/>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  )
}

export default TextWithIcon
