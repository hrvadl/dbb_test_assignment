import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Modal, Portal } from 'react-native-paper'
import Dots from './Dots'

type Props = {
  children: React.ReactNode
}

const ContextMenu = ({ children }: Props) => {
  const [isModalOpened, setModalOpened] = useState(false)

  const toggleModal = useCallback(() => {
    setModalOpened((s) => !s)
  }, [])

  return (
    <View>
      <Dots onPress={toggleModal} />
      <Portal>
        <Modal
          style={styles.Modal}
          dismissable
          visible={isModalOpened}
          onDismiss={toggleModal}
        >
          <Card style={styles.ModalContent}>{children}</Card>
        </Modal>
      </Portal>
    </View>
  )
}

const styles = StyleSheet.create({
  Modal: {
    paddingHorizontal: 30,
    paddingVertical: 160,
  },
  ModalContent: {
    height: '100%',
    padding: 20,
  },
  ModalButton: {
    height: 60,
    display: 'flex',
    marginTop: 20,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default ContextMenu
