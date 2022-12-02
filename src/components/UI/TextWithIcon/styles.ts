import styled, { css } from 'styled-components/native'

interface IWrapper {
  margin?: string
}

export const Wrapper = styled.View<IWrapper>`
    flex-direction: row;
    align-items: center;
`

export const Text = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.fontLight};
        font-family: ${theme.fontFamily.inter};
        font-size: 12px;
        margin: 0 6px;
    `}
`
