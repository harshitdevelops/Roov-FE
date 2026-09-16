import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Pressable,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { NotificationBellIcon } from '../../icons';
import { colors } from '../../../theme';

export type NotificationBellProps = {
  /** Unread notification count. A red dot shows only when this is > 0. */
  count: number;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function NotificationBell({
  count,
  size = 24,
  color = colors.white,
  onPress,
  style,
}: NotificationBellProps) {
  const hasUnread = count > 0;
  const swing = useRef(new Animated.Value(0)).current;
  const badgeScale = useRef(new Animated.Value(hasUnread ? 1 : 0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(2200),
        Animated.timing(swing, {
          toValue: 1,
          duration: 140,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(swing, {
          toValue: -1,
          duration: 280,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(swing, {
          toValue: 0.5,
          duration: 220,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(swing, {
          toValue: 0,
          duration: 180,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [swing]);

  useEffect(() => {
    Animated.spring(badgeScale, {
      toValue: hasUnread ? 1 : 0,
      useNativeDriver: true,
      friction: 5,
    }).start();
  }, [hasUnread, badgeScale]);

  const rotate = swing.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-16deg', '16deg'],
  });

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Notifications"
      onPress={onPress}
      style={[
        {
          width: size + 8,
          height: size + 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}
    >
      <Animated.View style={{ transform: [{ rotate }] }}>
        <NotificationBellIcon size={size} color={color} />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 4,
          right: 4,
          width: 9,
          height: 9,
          borderRadius: 999,
          backgroundColor: colors.status.error,
          borderWidth: 1.5,
          borderColor: colors.secondary,
          transform: [{ scale: badgeScale }],
        }}
      />
    </Pressable>
  );
}
