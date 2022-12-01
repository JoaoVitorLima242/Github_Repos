import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

import { RepoContextProvider } from './src/contexts/Repos'
import Routes from './src/routes/index.routes'
import { defaultTheme } from './src/styles/theme'
import AppLoading from 'expo-app-loading'

export default function App () {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <RepoContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </RepoContextProvider>
  )
}
