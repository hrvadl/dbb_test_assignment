import { NavigatorScreenParams } from '@react-navigation/native'

export type TabsParamsList = {
  File: undefined
  Profile: undefined
  Create: undefined
}

export type RootStackParamsList = {
  Home: NavigatorScreenParams<TabsParamsList>
}
