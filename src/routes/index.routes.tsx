import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// Routes & Screens
import DetailsScreen from '../screens/Details'
import Tabs from './tabs.routes'
// Types
import { RootStackParamList } from '../types/routes'
// Styles
import { defaultTheme } from '../styles/theme'

const Stack = createStackNavigator<RootStackParamList>()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={Tabs}
          options={{
            title: 'WeFit'
          }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: defaultTheme.colors.font
            },
            headerTintColor: '#fff',
            headerBackTitle: 'Detalhes',
            headerBackTitleStyle: {
              fontSize: 20,
              fontFamily: defaultTheme.fontFamily.roboto,
              marginStart: 16
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
