import styled, { css } from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
    background: #FFFFFF;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 10px;
    shadow-offset: {width: 0px, height: px};
    elevation: 10;
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

export const Image = styled.Image`
    width: 29px;
    height: 29px;
    border-radius: 50px;
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
