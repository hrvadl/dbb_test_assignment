import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Avatar, useTheme } from 'react-native-paper'
import { TabsParamsList } from '../../modules/navigation'
import FileExplorerScreen from './FileExplorerScreen'
import Stub from './Stub'

const Tab = createBottomTabNavigator<TabsParamsList>()

const HomeScreen = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Avatar.Icon
              icon="file"
              color={
                focused
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.background
              }
              size={50}
            />
          ),
        }}
        name="File"
        component={FileExplorerScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Avatar.Icon
              color={
                focused
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.background
              }
              icon="plus"
              size={50}
            />
          ),
        }}
        name="Create"
        component={Stub}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Avatar.Icon
              color={
                focused
                  ? theme.colors.onPrimaryContainer
                  : theme.colors.background
              }
              icon="account"
              size={50}
            />
          ),
        }}
        name="Profile"
        component={Stub}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen
