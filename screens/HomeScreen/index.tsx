import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text } from 'react-native-paper'
import { TabsParamsList } from '../../modules/navigation'
import FileExplorerScreen from './FileExplorerScreen'
import Stub from './Stub'

const Tab = createBottomTabNavigator<TabsParamsList>()

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <Text>File</Text>,
        }}
        name="File Explorer"
        component={FileExplorerScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => <Text>Profile</Text>,
        }}
        name="Profile"
        component={Stub}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen
