import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View``

export const InfoText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fontFamily.inter};
        color: ${theme.colors.fontLight};
        font-size: 16px;
    `}
`
