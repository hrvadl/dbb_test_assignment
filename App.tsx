import { StatusBar } from 'expo-status-bar'
import { PaperProvider as ThemeProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as StoreProvider } from 'react-redux'
import { theme } from './design/theme'
import { NavigationProvider } from './modules/navigation'
import { store } from './modules/store'

export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationProvider />
          <StatusBar style="auto" />
        </ThemeProvider>
      </StoreProvider>
    </SafeAreaProvider>
  )
}
