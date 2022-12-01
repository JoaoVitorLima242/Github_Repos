import { ThemeProvider } from 'styled-components'

import { RepoContextProvider } from './src/contexts/Repos'
import Routes from './src/routes/index.routes'
import { defaultTheme } from './src/styles/theme'

export default function App () {
  return (
    <RepoContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </RepoContextProvider>
  )
}
