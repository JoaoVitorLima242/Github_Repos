import { useContext, useState, useCallback, useMemo, useRef, useEffect } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet'

// Contexts
import RepoContext from '../../../contexts/Repos'
// Components
import Button from '../../UI/Button'
// Styles
import * as S from './styles'
import { defaultTheme } from '../../../styles/theme'

const SelectorModal = () => {
  const { modalHandler, modal, usernameSelected, selectUsernameHandler } = useContext(RepoContext)

  const [username, setUsername] = useState('')

  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => [10, 200], [])

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      onCloseHandler()
    }
  }, [])

  const onCloseHandler = () => {
    modalHandler(false)
    bottomSheetRef.current?.close()
  }

  const saveHandler = () => {
    selectUsernameHandler(username)
    modalHandler(false)
    bottomSheetRef.current?.close()
  }

  useEffect(() => {
    if (modal) {
      bottomSheetRef.current?.snapToIndex(1)
    } else {
      onCloseHandler()
    }
  }, [modal])

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        onPress={onCloseHandler}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  )

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      keyboardBehavior='interactive'
    >
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
    </BottomSheet>

  )
}

export default SelectorModal
