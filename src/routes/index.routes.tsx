import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ReposScreen from '../screens/Repos'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Repos'
          component={ReposScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
