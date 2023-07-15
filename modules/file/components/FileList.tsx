import { Error, File, Folder } from '@design/index'
import React from 'react'
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native'
import { ActivityIndicator, useTheme } from 'react-native-paper'
import { useChangePath } from '../hooks/useChangePath'
import { useDeleteFile } from '../hooks/useDeleteFile'
import { useFiles } from '../hooks/useFiles'
import { Folder as FolderType, isFile } from '../types/file'
import SnackBarNotification from './SnackBarNotification'

type Props = {
  style?: ViewStyle
}

const FileList = ({ style }: Props) => {
  const theme = useTheme()
  const { state } = useFiles()
  const { goForwardHandler } = useChangePath()
  const { deleteFileHandler } = useDeleteFile()

  const changeCurrentPathHandler = (folder: FolderType) => {
    goForwardHandler(folder.path_lower)
  }

  if (state.error) {
    return (
      <Error
        title="Oops, something went wrong..."
        subtitle="Maybe your token has expired"
      />
    )
  }
  if (state.loading) {
    return (
      <View style={styles.LoaderContainer}>
        <ActivityIndicator color={theme.colors.primary} size="large" />
      </View>
    )
  }

  if (!state.files.length && !state.loading) {
    return (
      <Error title="Not found..." subtitle="Seems like this folder is empty." />
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style}>
      <View style={styles.Container}>
        {state.files?.map((file) =>
          isFile(file) ? (
            <File
              onDelete={deleteFileHandler}
              style={styles.Item}
              file={file}
              key={file.id}
            />
          ) : (
            <Folder
              onDelete={deleteFileHandler}
              style={styles.Item}
              onPress={changeCurrentPathHandler}
              folder={file}
              key={file.id}
            />
          )
        )}
        <SnackBarNotification />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  Item: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: `${100 / 3}%`,
  },
  LoaderContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default FileList
