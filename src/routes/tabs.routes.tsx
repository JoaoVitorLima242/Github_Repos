import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

// Screens
import FavoritesScreen from '../screens/Favorities'
import ReposScreen from '../screens/Repos'
// Styles
import { defaultTheme } from '../styles/theme'
// Types
import { BottomTabParamList } from '../types/routes'

const Tab = createBottomTabNavigator<BottomTabParamList>()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
          title: 'Repositórios',
          tabBarIcon: ({ color }) => (
            <AntDesign name="github" size={20} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="star" size={20} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
