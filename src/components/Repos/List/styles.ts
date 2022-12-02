import styled, { css } from 'styled-components/native'

export const CustomFlatlist = styled.FlatList`
    ${({ theme }) => css`
        padding-top: 16px;
        background-color: ${theme.colors.bgWhite};
    `}
    `
