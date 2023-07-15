import React, { memo } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { Button } from 'react-native-paper'

type Props = {
  style?: ViewStyle
  onPress?: () => void
}

const Dots = ({ style, onPress }: Props) => {
  return (
    <View style={style}>
      <Button
        style={styles.DotsContainer}
        labelStyle={styles.Dots}
        onPress={onPress}
      >
        . . .
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  DotsContainer: {
    width: 70,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Dots: {
    fontSize: 16,
    fontWeight: '800',
    marginTop: -2,
  },
})

export default memo(Dots)
