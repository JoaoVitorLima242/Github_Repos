import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 17px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fontFamily.interBold};
        font-size: 20px;
        margin-bottom: 8px;
        text-align: center;
    `}
`

export const Message = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fontFamily.inter};
        font-size: 14px;
        text-align: center;
        margin-bottom: 40px;
    `}
`
