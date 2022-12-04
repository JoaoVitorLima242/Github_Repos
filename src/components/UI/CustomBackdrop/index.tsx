import React, { useMemo } from 'react'
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle
} from 'react-native-reanimated'

const CustomBackdrop = ({ animatedIndex, style, animatedPosition }: BottomSheetBackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP
    )
  }))

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#00000042'
      },
      containerAnimatedStyle
    ],
    [style, containerAnimatedStyle]
  )

  if (animatedIndex.value === -1) return null

  return <Animated.View style={containerStyle} />
}

export default CustomBackdrop
