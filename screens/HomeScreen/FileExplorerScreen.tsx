import PaddedSection from '@design/PaddedSection'
import { FileHeader, FileList } from '@modules/file'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'

const FileExplorerScreen = () => {
  const theme = useTheme()

  return (
    <View style={styles.Container}>
      <FileHeader />
      <PaddedSection
        style={{
          backgroundColor: theme.colors.background,
          ...styles.Container,
        }}
      >
        <FileList />
      </PaddedSection>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
})

export default FileExplorerScreen
