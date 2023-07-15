import React from 'react'
import { ViewStyle } from 'react-native'
import { Portal, Snackbar } from 'react-native-paper'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { hideMessage } from '../../store/reducers/ui'

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
