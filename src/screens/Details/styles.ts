import styled, { css } from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
    margin: 16px;
    flex: 1;
`

export const InfoText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fontFamily.inter};
        color: ${theme.colors.fontLight};
        font-size: 16px;
        margin-top: 16px;
    `}
`

export const LanguageContainer = styled.View`
    margin-top: 16px;
`

export const ButtonsView = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: stretch;
`
