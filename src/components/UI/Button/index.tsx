import { Ionicons } from '@expo/vector-icons'

// Styles
import * as S from './styles'

interface Props {
  backgroundColor: string
  outline?: boolean
  color: string
  icon?: keyof typeof Ionicons.glyphMap
  text: string
  iconSide?: 'left' | 'right'
}

const Button = ({
  backgroundColor,
  outline,
  color,
  icon,
  text,
  iconSide = 'left'
}: Props) => {
  return (
    <S.Wrapper
      activeOpacity={0.7}
      backgroundColor={backgroundColor}
      outline={outline}
      color={color}
      iconSide={iconSide}
    >
      {!!icon && <Ionicons size={20} name={icon} color={color}/>}
      <S.Text iconSide={iconSide} color={color}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default Button
