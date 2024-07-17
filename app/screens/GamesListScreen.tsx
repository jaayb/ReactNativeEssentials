import React from 'react'
import { Image, TextStyle, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { colors, sizes } from '../../shared/theme'
import { games } from '../../shared/utils/sampleGames'
import { Text } from '../components/Text'

export const GamesListScreen = () => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets()

  return (
    <View style={[$screen, { paddingBottom, paddingTop }]}>
      <View style={$scard}>
        <Image
          style={$scardContent}
          source={{ uri: games[0].cover.imageUrl }}
        />
        <Text>{games[0].name}</Text>
      </View>
    </View>
  )
}

const $scard: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  padding: sizes.spacing.md,
  columnGap: sizes.spacing.md,
}

const $scardContent: ImageStyle = {
  height: 90,
  width: 90,
}

const $screen: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background.primary,
  paddingHorizontal: sizes.spacing.md,
  justifyContent: 'space-between',
}

const $welcomeContainer: ViewStyle = {
  rowGap: sizes.spacing.lg,
  flexGrow: 1,
  justifyContent: 'center',
}

const $welcomeSmall: TextStyle = {
  fontSize: 18,
  color: 'black',
}

const $welcomeLarge: TextStyle = {
  fontSize: 48,
  color: 'black',
}

const $screenInfo: TextStyle = {
  fontSize: 12,
  opacity: 0.5,
  color: 'black',
}
