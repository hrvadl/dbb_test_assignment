import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { Avatar, Button, Card, Text, useTheme } from 'react-native-paper'
import { File as FileType } from '../modules/file/types/file'
import ContextMenu from './ContextMenu'

type Props = {
  style?: ViewStyle
  file: FileType
  onDelete: (path: string) => void
}

const File = ({ style, file, onDelete }: Props) => {
  const theme = useTheme()

  const removeFileHandler = () => {
    onDelete(file.path_lower)
  }

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
      <ContextMenu>
        <Card.Title title={file.name} titleVariant="headlineLarge" />
        <Card.Content>
          <Text style={styles.ModalText} variant="bodyLarge">
            File path: {file.path_lower}
          </Text>
          <Text style={styles.ModalText} variant="bodyLarge">
            Size: {file.size}
          </Text>
          <Text style={styles.ModalText} variant="bodyLarge">
            Last modified: {file.client_modified}
          </Text>
          <Button mode="outlined" onPress={removeFileHandler}>
            Delete file
          </Button>
        </Card.Content>
      </ContextMenu>
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
  ModalText: {
    marginVertical: 10,
  },
})

export default File
