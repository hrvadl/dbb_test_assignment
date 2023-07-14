import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Avatar, useTheme } from 'react-native-paper'
import { File as FileType } from '../modules/file/types/file'

type Props = {
  style?: ViewStyle
  file: FileType
}

const File = ({ style, file }: Props) => {
  const theme = useTheme()

  return (
    <View style={[style]}>
      <Avatar.Icon
        icon="file"
        size={80}
        color={theme.colors.primary}
        style={{ backgroundColor: theme.colors.background }}
      />
      <Text numberOfLines={1} style={styles.Text}>
        {file.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
  },
})

export default File
