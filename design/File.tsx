import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { Avatar, Text, useTheme } from 'react-native-paper'
import { File as FileType } from '../modules/file/types/file'

type Props = {
  style?: ViewStyle
  file: FileType
}

const File = ({ style, file }: Props) => {
  const theme = useTheme()

  return (
    <View style={[styles.Container, style]}>
      <Avatar.Icon
        icon="file"
        size={140}
        color={theme.colors.primary}
        style={{ backgroundColor: theme.colors.background }}
      />
      <Text variant="bodyLarge" numberOfLines={1}>
        {file.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default File
