import styled, { css } from 'styled-components/native'

interface IText {
  fontSize?: number
}

export const Wrapper = styled.View`
    flex-direction: row;
`
export const AuthorName = styled.Text<IText>`
    ${({ theme, fontSize }) => css`
        color: ${theme.colors.font}
        font-family: ${theme.fontFamily.inter};
        font-size: ${fontSize ? `${fontSize}px` : '12px'}
    `}
`

export const RepoName = styled.Text<IText>`
    ${({ theme, fontSize }) => css`
        color: ${theme.colors.font}
        font-family: ${theme.fontFamily.interBold};
        font-size: ${fontSize ? `${fontSize}px` : '12px'}
    `}
`
