import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { Text, type TextProps } from '../Text';

declare const requestIdleCallback:
  | ((callback: () => void) => number)
  | undefined;
declare const cancelIdleCallback: ((handle: number) => void) | undefined;

export type AnimatedCounterProps = Omit<TextProps, 'children'> & {
  /** Target numeric value to animate towards. */
  value: number;
  /** Animation duration in ms. Defaults to 700. */
  duration?: number;
};

/**
 * Text that counts up/down to `value` whenever it changes, instead of
 * snapping to the new number.
 */
export function AnimatedCounter({
  value,
  duration = 700,
  ...textProps
}: AnimatedCounterProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const listenerId = animatedValue.addListener(({ value: current }) => {
      setDisplayValue(Math.round(current));
    });

    const startAnimation = () => {
      Animated.timing(animatedValue, {
        toValue: value,
        duration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    };

    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

    if (typeof requestIdleCallback === 'function') {
      idleHandle = requestIdleCallback(startAnimation);
    } else {
      timeoutHandle = setTimeout(startAnimation, 0);
    }

    return () => {
      if (idleHandle != null && typeof cancelIdleCallback === 'function') {
        cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle != null) {
        clearTimeout(timeoutHandle);
      }
      animatedValue.removeListener(listenerId);
    };
  }, [value, duration, animatedValue]);

  return <Text {...textProps}>{displayValue.toLocaleString()}</Text>;
}
