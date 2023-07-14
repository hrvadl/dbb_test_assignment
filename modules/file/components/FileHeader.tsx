import React from 'react'
import { ViewStyle } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useChangePath } from '../hooks/useChangePath'
import { useFiles } from '../hooks/useFiles'

type Props = {
  style?: ViewStyle
}

const FileHeader = ({ style }: Props) => {
  const { state } = useFiles()
  const { goBackHandler } = useChangePath()

  return (
    <Appbar.Header style={style}>
      <Appbar.BackAction
        onPress={goBackHandler}
        disabled={state.currentPath.path === '/'}
      />
      <Appbar.Content title={'Path: ' + (state.currentPath.path || '/')} />
    </Appbar.Header>
  )
}

export default FileHeader
