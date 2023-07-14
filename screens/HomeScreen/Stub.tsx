import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native'
import { Alert } from 'react-native'
import { RootStackParamsList } from '../../modules/navigation'

const Stub = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamsList, 'Home'>>()

  useFocusEffect(() => {
    Alert.alert('Not implemented', 'Sorry, but this screen is not available', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home', { screen: 'File' }),
        style: 'cancel',
      },
    ])
  })

  return null
}

export default Stub
