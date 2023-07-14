import React from 'react'
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native'
import { ActivityIndicator, useTheme } from 'react-native-paper'
import Error from '../../../design/Error'
import File from '../../../design/File'
import Folder from '../../../design/Folder'
import { useChangePath } from '../hooks/useChangePath'
import { useFiles } from '../hooks/useFiles'
import { Folder as FolderType, isFile } from '../types/file'

type Props = {
  style?: ViewStyle
}

const FileList = ({ style }: Props) => {
  const theme = useTheme()
  const { state } = useFiles()
  const { goForwardHandler } = useChangePath()

  const changeCurrentPathHandler = (folder: FolderType) => {
    goForwardHandler(folder.path_lower)
  }

  if (state.error) {
    return (
      <Error title="Oops, something went wrong..." subtitle={state.error} />
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
    <ScrollView style={style}>
      <View style={styles.Container}>
        {state.files?.map((file) =>
          isFile(file) ? (
            <File file={file} key={file.id} />
          ) : (
            <Folder
              style={styles.Item}
              onPress={changeCurrentPathHandler}
              folder={file}
              key={file.id}
            />
          )
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
  },
  Item: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '25%',
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
