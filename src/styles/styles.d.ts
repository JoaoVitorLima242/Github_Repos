import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      font: string
      fontLight: string
      yellow: string
      yellowLight: string
      red: string
      blue: string
      bgWhite: string
      white: string
    }
    fontFamily: {
      roboto: string
      inter: string
      interBold: string
    }
  }
}
