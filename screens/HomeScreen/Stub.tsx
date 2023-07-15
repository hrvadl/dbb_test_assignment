import { RootStackParamsList } from '@modules/navigation'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { Button, Dialog, Text, useTheme } from 'react-native-paper'

const Stub = () => {
  const theme = useTheme()
  const navigation =
    useNavigation<NavigationProp<RootStackParamsList, 'Home'>>()

  const hideDialog = () => navigation.navigate('Home', { screen: 'File' })

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background,
        },
        style.Container,
      ]}
    >
      <Dialog visible={true} onDismiss={hideDialog}>
        <Dialog.Title>Not Implemented</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Sorry, but this screen is not implemented
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  )
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
})

export default Stub
