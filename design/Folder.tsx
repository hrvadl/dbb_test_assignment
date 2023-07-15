import React from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'
import { Avatar, Button, Card, Text, useTheme } from 'react-native-paper'
import { Folder as FolderType } from '../modules/file'
import ContextMenu from './ContextMenu'

type Props = {
  style?: ViewStyle
  folder: FolderType
  onPress: (folder: FolderType) => void
  onDelete: (path: string) => void
}

const Folder = ({ folder, onPress, style, onDelete }: Props) => {
  const theme = useTheme()

  const removeFileHandler = () => {
    onDelete(folder.path_lower)
  }

  return (
    <Pressable
      onPress={() => onPress(folder)}
      style={[styles.Container, style]}
    >
      <Avatar.Icon
        icon="folder"
        size={140}
        color={theme.colors.primary}
        style={{ backgroundColor: theme.colors.background }}
      />
      <Text variant="bodyLarge" numberOfLines={1}>
        {folder.name}
      </Text>
      <ContextMenu>
        <Card.Title title={folder.name} titleVariant="headlineLarge" />
        <Card.Content>
          <Text style={styles.ModalText} variant="bodyLarge">
            File path: {folder.path_lower}
          </Text>
        </Card.Content>
        <Button mode="outlined" onPress={removeFileHandler}>
          Delete folder
        </Button>
      </ContextMenu>
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
  ModalText: {
    marginVertical: 10,
  },
})

export default Folder
