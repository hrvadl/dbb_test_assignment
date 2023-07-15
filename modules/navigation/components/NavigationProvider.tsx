import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '@screens/HomeScreen'
import React from 'react'
import { Stack } from '../rootStack'

const headerOptions = { headerShown: false }

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationProvider
