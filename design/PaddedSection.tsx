import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

type Props = {
  style?: ViewStyle
  children: React.ReactNode
}

const PaddedSection = (props: Props) => {
  return <View style={[styles.Container, props.style]}>{props.children}</View>
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
})

export default PaddedSection
