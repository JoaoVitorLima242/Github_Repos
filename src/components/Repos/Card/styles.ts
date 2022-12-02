import styled, { css } from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
    background: #FFFFFF;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin: 0 16px 16px;
    padding: 12px 16px;
`

export const TitleSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom-color: #DADADA;
    border-bottom-width: 1px;
`

export const InfoSection = styled.View`
    padding-top: 16px;
`

export const DescriptionText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.fontLight};
        font-family: ${theme.fontFamily.inter}
    `}
`
export const FooterSection = styled.View`
    padding-top: 16px;
    flex-direction: row;
    justify-content: space-between;
`
