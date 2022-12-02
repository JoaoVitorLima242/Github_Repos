import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// Routes & Screens
import DetailsScreen from '../screens/Details'
import Tabs from './tabs.routes'
// Types
import { RootStackParamList } from '../types/routes'

const Stack = createStackNavigator<RootStackParamList>()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={Tabs}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Routes
