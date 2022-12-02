import { useRoute } from '@react-navigation/native'

// Components
import Title from '../../components/Repos/Title'
// Types
import { IRepo } from '../../types/repo'
// Styles
import * as S from './styles'

interface Router extends IRepo {}

const DetailsScreen = () => {
  const router = useRoute()

  const {
    description,
    full_name,
    html_url,
    id,
    language,
    owner,
    stargazers_countå
  } = router.params as Router

  return (
    <S.Wrapper>
      <Title fullName={full_name}/>
      <S.InfoText>{description}</S.InfoText>
      <S.InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus, vel consectetur diam efficitur in. Suspendisse ut enim augue. Donec ullamcorper odio in tellus feugiat venenatis. Phasellus eleifend nisl neque, a pulvinar nisl mattis ac. Phasellus vitae velit eu dui tempus ullamcorper eget ut metus. Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a. Nam vel leo vitae leo volutpat varius.</S.InfoText>
    </S.Wrapper>
  )
}

export default DetailsScreen
