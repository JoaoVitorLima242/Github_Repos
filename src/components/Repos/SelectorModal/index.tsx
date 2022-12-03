import { useContext, useState } from 'react'
import { KeyboardAvoidingView, Modal } from 'react-native'

// Contexts
import RepoContext from '../../../contexts/Repos'
// Components
import Button from '../../UI/Button'
// Styles
import * as S from './styles'
import { defaultTheme } from '../../../styles/theme'

const SelectorModal = () => {
  const { selectorModalHandler, selectorModal, usernameSelected } = useContext(RepoContext)

  const [username, setUsername] = useState('')

  const onCloseHandler = () => {
    selectorModalHandler()
  }

  const saveHandler = () => {
    selectorModalHandler(username)
  }

  return (
    <Modal
      visible={selectorModal}
      transparent
      animationType='fade'
    >
      <S.Outsize
        onPress={onCloseHandler}
      />
      <KeyboardAvoidingView behavior='padding'>
        <S.Content>
          <S.Text>Alterar usuário selecionado</S.Text>
          <S.InputArea>
            <S.Label>Nome do usuário</S.Label>
            <S.Input
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect={false}
              onChangeText={(e) => setUsername(e)}
              defaultValue={usernameSelected}
            />
          </S.InputArea>
          <S.ButtonFlex>
            <S.ButtonView>
              <Button
                text='CANCELAR'
                color={defaultTheme.colors.blue}
                backgroundColor='#fff'
                textSize={15}
                onPress={onCloseHandler}
              />
            </S.ButtonView>
            <S.ButtonView>
              <Button
                text='SALVAR'
                color='#fff'
                backgroundColor={defaultTheme.colors.blue}
                textSize={15}
                onPress={saveHandler}
              />
            </S.ButtonView>
          </S.ButtonFlex>
        </S.Content>

      </KeyboardAvoidingView>
    </Modal>

  )
}

export default SelectorModal
