import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { Avatar, Text, useTheme } from 'react-native-paper'

type Props = {
  title: string
  subtitle: string
  style?: ViewStyle
}

const Error = ({ title, subtitle, style }: Props) => {
  const theme = useTheme()

  return (
    <View style={[style, styles.Container]}>
      <Avatar.Icon style={styles.Icon} icon="alert-circle" size={200} />
      <Text
        style={[{ color: theme.colors.error }, styles.Text]}
        variant="displaySmall"
      >
        {title}
      </Text>
      <Text
        style={[styles.Text, { color: theme.colors.onBackground }]}
        variant="bodyLarge"
      >
        {subtitle}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  Text: {
    textAlign: 'center',
  },
  Icon: {
    marginTop: -40,
    marginBottom: 40,
    alignSelf: 'center',
  },
})

export default Error
