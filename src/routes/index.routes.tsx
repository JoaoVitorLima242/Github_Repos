import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign, Ionicons } from '@expo/vector-icons'

// Screens
import FavoritesScreen from '../screens/Favorities'
import ReposScreen from '../screens/Repos'
import { defaultTheme } from '../styles/theme'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: defaultTheme.colors.white,
            paddingBottom: 10,
            borderTopWidth: 0,
            height: 70
          },
          tabBarLabelStyle: {
            fontFamily: defaultTheme.fontFamily.roboto,
            marginBottom: 12,
            padding: 0,
            fontSize: 14
          },
          tabBarInactiveTintColor: '#00000060'
        }}
      >
        <Tab.Screen
          name='Repos'
          component={ReposScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="github" size={20} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="star" size={20} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes
