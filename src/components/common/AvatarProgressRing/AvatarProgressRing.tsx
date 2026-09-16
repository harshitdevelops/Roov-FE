import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '../../../theme';
import { Avatar, type AvatarProps } from '../Avatar';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type AvatarProgressRingProps = Omit<AvatarProps, 'size' | 'square'> & {
  /** 0-100 completion percentage the ring animates towards. */
  progress: number;
  /** Diameter of the avatar itself. Defaults to 64. */
  size?: number;
  /** Thickness of the progress ring. Defaults to 4. */
  ringWidth?: number;
  /** Breathing room between the avatar and the ring. Defaults to 6. */
  gap?: number;
  /** Ring fill animation duration in ms. Defaults to 1200. */
  duration?: number;
};

export function AvatarProgressRing({
  progress,
  size = 64,
  ringWidth = 4,
  gap = 6,
  duration = 1200,
  ...avatarProps
}: AvatarProgressRingProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const containerSize = size + (gap + ringWidth) * 2;
  const radius = (containerSize - ringWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const animatedProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: clampedProgress,
      duration,
      useNativeDriver: false,
    }).start();
  }, [clampedProgress, duration, animatedProgress]);

  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View
      style={{
        width: containerSize,
        height: containerSize,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Svg
        width={containerSize}
        height={containerSize}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Defs>
          <LinearGradient id="avatarRingGradient" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={colors.accent} />
            <Stop offset="1" stopColor={colors.highlight} />
          </LinearGradient>
        </Defs>
        <Circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          stroke={colors.border.default}
          strokeWidth={ringWidth}
          fill="none"
        />
        <AnimatedCircle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={radius}
          stroke="url(#avatarRingGradient)"
          strokeWidth={ringWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          rotation={-90}
          origin={`${containerSize / 2}, ${containerSize / 2}`}
        />
      </Svg>
      <Avatar {...avatarProps} size={size} />
    </View>
  );
}
