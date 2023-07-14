import React from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'
import { Avatar, Text, useTheme } from 'react-native-paper'
import { Folder as FolderType } from '../modules/file/types/file'

type Props = {
  style?: ViewStyle
  folder: FolderType
  onPress: (folder: FolderType) => void
}

const Folder = ({ folder, onPress, style }: Props) => {
  const theme = useTheme()

  return (
    <Pressable
      onPress={() => onPress(folder)}
      style={[styles.Container, style]}
    >
      <Avatar.Icon
        icon="folder"
        size={80}
        color={theme.colors.primary}
        style={{ backgroundColor: theme.colors.background }}
      />
      <Text numberOfLines={1} style={styles.Text}>
        {folder.name}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 16,
  },
})

export default Folder
