import { Ionicons } from '@expo/vector-icons'
import { GestureResponderEvent } from 'react-native'

// Styles
import * as S from './styles'

interface Props {
  backgroundColor: string
  outline?: boolean
  color: string
  icon?: keyof typeof Ionicons.glyphMap
  text: string
  textSize?: number
  iconSide?: 'left' | 'right'
  onPress?: ((event: GestureResponderEvent) => void)
}

const Button = ({
  backgroundColor,
  outline,
  color,
  icon,
  text,
  iconSide = 'left',
  textSize,
  onPress
}: Props) => {
  return (
    <S.Wrapper
      activeOpacity={0.7}
      backgroundColor={backgroundColor}
      outline={outline}
      color={color}
      iconSide={iconSide}
      onPress={onPress}
    >
      {!!icon && <Ionicons size={20} name={icon} color={color}/>}
      <S.Text iconSide={iconSide} color={color} textSize={textSize}>{text}</S.Text>
    </S.Wrapper>
  )
}

export default Button
