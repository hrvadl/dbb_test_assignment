import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native'
import { MD3DarkTheme as PaperDarkTheme } from 'react-native-paper'

export const theme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
  },
} as const
