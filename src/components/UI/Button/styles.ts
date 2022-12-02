import styled, { css } from 'styled-components/native'

interface IWrapper {
  backgroundColor: string
  outline?: boolean
  color: string
  iconSide: 'left' | 'right'
}

interface IText {
  color: string
  iconSide: 'left' | 'right'
  textSize?: number
}

const wrapperModifiers = {
  iconSide: {
    left: () => css`
        flex-direction: row;
    `,
    right: () => css`
        flex-direction: row-reverse;
    `
  },
  outline: (color: string) => css`
    border: 1px solid ${color};
  `
}

const textModifiers = {
  iconSide: {
    left: () => css`
        margin-left: 10px
    `,
    right: () => css`
        margin-right: 10px
    `
  }
}

export const Wrapper = styled.TouchableOpacity<IWrapper>`
    ${({ backgroundColor, color, outline, iconSide }) => css`
        background-color: ${backgroundColor};
        padding: 10px;
        border: 1px solid ${backgroundColor};
        border-radius: 4px;
        padding: 8px 10px;
        align-items: center;
        justify-content: center;
        gap: 30px 20px;


        ${iconSide && wrapperModifiers.iconSide[iconSide]}
        ${outline && wrapperModifiers.outline(color)}
    `}
`

export const Text = styled.Text<IText>`
    ${({ theme, color, iconSide, textSize }) => css`
        font-family: ${theme.fontFamily.interBold};
        color: ${color};
        
        font-size: ${textSize ? `${textSize}px` : '12px'};
        ${iconSide && textModifiers.iconSide[iconSide]}
    `}
`
