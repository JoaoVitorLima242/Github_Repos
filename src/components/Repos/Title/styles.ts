import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
    flex-direction: row;
`
export const AuthorName = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.font}
    `}
`

export const RepoName = styled.Text`
${({ theme }) => css`
        color: ${theme.colors.font}
        font-weight: 700;
    `}
`
