import { hideMessage, useAppDispatch, useAppSelector } from '@modules/store'
import React from 'react'
import { ViewStyle } from 'react-native'
import { Portal, Snackbar } from 'react-native-paper'

type Props = {
  style?: ViewStyle
}

const SnackBarNotification = ({ style }: Props) => {
  const dispatch = useAppDispatch()
  const message = useAppSelector((state) => state.ui.snackBarMessage)

  const dismissHandler = () => {
    dispatch(hideMessage())
  }

  return (
    <Portal>
      <Snackbar
        style={style}
        onDismiss={dismissHandler}
        action={{
          label: 'OK',
          onPress: dismissHandler,
        }}
        visible={message !== null}
      >
        {message}
      </Snackbar>
    </Portal>
  )
}

export default SnackBarNotification
