import { ActivityIndicator } from 'react-native'

import { defaultTheme } from '../../../styles/theme'
import * as S from './styles'

const LoadingOverlay = () => {
  return (
    <S.Wrapper>
      <ActivityIndicator
        size='large'
        color={defaultTheme.colors.blue}
      />
    </S.Wrapper>
  )
}

export default LoadingOverlay
