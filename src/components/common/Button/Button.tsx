import { type ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  type StyleProp,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import { Text } from '../Text';
import {
  type ButtonSize,
  type ButtonVariant,
  sizeStyles,
  styles,
  variantStyles,
} from './styles';

export type { ButtonSize, ButtonVariant };

export type ButtonProps = Omit<PressableProps, 'style' | 'children'> & {
  /** Text label. Ignored when `children` is provided. */
  title?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Rendered before the label. */
  leftIcon?: ReactNode;
  /** Rendered after the label. */
  rightIcon?: ReactNode;
  /** Swaps the content for a spinner and blocks presses. */
  loading?: boolean;
  disabled?: boolean;
  /** Stretches the button to fill its container. */
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  /** Custom content — replaces the default icon/label row entirely. */
  children?: ReactNode;
};

export function Button({
  title,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
  children,
  ...rest
}: ButtonProps) {
  const v = variantStyles[variant];
  const s = sizeStyles[size];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        s.container,
        v.container,
        { gap: s.gap },
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && v.pressed,
        isDisabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={v.spinner} />
      ) : children != null ? (
        children
      ) : (
        <>
          {leftIcon != null && <View style={styles.iconSlot}>{leftIcon}</View>}
          {title != null && (
            <Text style={[styles.label, s.text, v.text, textStyle]}>
              {title}
            </Text>
          )}
          {rightIcon != null && (
            <View style={styles.iconSlot}>{rightIcon}</View>
          )}
        </>
      )}
    </Pressable>
  );
}
