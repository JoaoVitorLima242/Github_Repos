import { ThemeProvider } from 'styled-components'
import 'react-native-gesture-handler'
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'

// Contexts
import { RepoContextProvider } from './src/contexts/Repos'
// Routes
import Routes from './src/routes/index.routes'
// Styles
import { defaultTheme } from './src/styles/theme'
import SelectorModal from './src/components/Repos/SelectorModal'
import { StatusBar } from 'expo-status-bar'

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
        <SelectorModal />
        <Routes />
        <StatusBar style='dark'/>
      </ThemeProvider>
    </RepoContextProvider>
  )
}
