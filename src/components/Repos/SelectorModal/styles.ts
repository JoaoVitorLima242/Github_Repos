import styled, { css } from 'styled-components/native'

export const Outsize = styled.Pressable`
    flex: 1;
    background-color: #000000AA;
    justify-content: flex-end;
`

export const Content = styled.View`
    background: #fff;
    height: 200px;
    padding: 16px;
    border-radius
`

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: 16px;
        font-family: ${theme.fontFamily.roboto};
        padding-bottom: 10px;
    `}
`

export const InputArea = styled.View`
    background: rgba(0, 0, 0, 0.06);
    border-radius: 4px 4px 0px 0px;
    border-bottom-color: #00000042;
    border-bottom-width: 1px;
    padding: 8px 12px;
    margin-bottom: 8px;
`

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: 12px;
        font-family: ${theme.fontFamily.roboto};
        padding-bottom: 8px;
    `}
`

export const Input = styled.TextInput`
    ${({ theme }) => css`
        font-size: 16px;
        font-family: ${theme.fontFamily.roboto};
    `}
`

export const ButtonView = styled.View`
    width: 50%;
`

export const ButtonFlex = styled.View`
    width: 100%;
    flex-direction: row;
`
