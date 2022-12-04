import { useContext } from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

// Routes & Screens
import DetailsScreen from '../screens/Details'
import Tabs from './tabs.routes'
// Types
import { RootStackParamList } from '../types/routes'
// Styles
import { defaultTheme } from '../styles/theme'
import styled from 'styled-components/native'
// Contexts
import RepoContext from '../contexts/Repos'

const Stack = createStackNavigator<RootStackParamList>()

const IconArea = styled.TouchableOpacity`
    margin-right: 19px;
  `

const Routes = () => {
  const { modalHandler } = useContext(RepoContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={Tabs}
          options={{
            title: 'WeFit',
            headerRight: ({ tintColor }) => (
              <IconArea
                activeOpacity={0.7}
                onPress={() => modalHandler(true)}
              >
                <Ionicons name='settings-sharp' size={20} color={tintColor}/>
              </IconArea>
            )
          }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{
            title: Platform.OS === 'android' ? 'Detalhes' : '',
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
