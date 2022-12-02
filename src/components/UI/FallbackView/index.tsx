import * as S from './styles'

interface Props {
  title: string
  message?: string
}

const FallbackView = ({ title, message }: Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {message && <S.Message>{message}</S.Message>}
    </S.Wrapper>
  )
}

export default FallbackView
