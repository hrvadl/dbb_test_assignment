import { NavigatorScreenParams } from '@react-navigation/native'

export type TabsParamsList = {
  'File Explorer': undefined
  Profile: undefined
}

export type RootStackParamsList = {
  Home: NavigatorScreenParams<TabsParamsList>
}
