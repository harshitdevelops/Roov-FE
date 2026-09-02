import { isValidElement, type ReactNode } from 'react';
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import { borderRadius } from '../../../theme';
import { Text } from '../Text';
import { styles } from './styles';

export type RadioProps = Omit<PressableProps, 'style' | 'children'> & {
  selected: boolean;
  onPress: () => void;
  label?: ReactNode;
  disabled?: boolean;
  /** Outer ring diameter in px. Defaults to 22. */
  size?: number;
  style?: StyleProp<ViewStyle>;
  ringStyle?: StyleProp<ViewStyle>;
};

export function Radio({
  selected,
  onPress,
  label,
  disabled = false,
  size = 22,
  style,
  ringStyle,
  ...rest
}: RadioProps) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      hitSlop={8}
      onPress={onPress}
      style={[styles.row, disabled && styles.disabled, style]}
      {...rest}
    >
      <View
        style={[
          styles.ring,
          { width: size, height: size, borderRadius: borderRadius.full },
          selected && styles.ringSelected,
          ringStyle,
        ]}
      >
        {selected && (
          <View
            style={[
              styles.dot,
              {
                width: size * 0.5,
                height: size * 0.5,
                borderRadius: borderRadius.full,
              },
            ]}
          />
        )}
      </View>

      {label != null &&
        (isValidElement(label) ? (
          label
        ) : (
          <Text style={styles.label}>{label}</Text>
        ))}
    </Pressable>
  );
}
