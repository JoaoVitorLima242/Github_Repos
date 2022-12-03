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
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useContext } from 'react'
import RepoContext from '../contexts/Repos'

const Stack = createStackNavigator<RootStackParamList>()

const Icon = styled(Ionicons)`
    margin-right: 19px;
    `

const Routes = () => {
  const { selectorModalHandler } = useContext(RepoContext)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={Tabs}
          options={{
            title: 'WeFit',
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => selectorModalHandler()}
              >
                <Icon name='settings-sharp' size={20} color={tintColor}/>
              </TouchableOpacity>
            )
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
