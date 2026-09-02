import { type ReactNode } from 'react';
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { borderRadius } from '../../../theme';
import { type IconButtonVariant, styles, variantStyles } from './styles';

export type { IconButtonVariant };

export type IconButtonProps = Omit<PressableProps, 'style' | 'children'> & {
  icon: ReactNode;
  /** Square hit area in px. Defaults to 40. */
  size?: number;
  variant?: IconButtonVariant;
  /** Rounds the corners fully into a circle. */
  round?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function IconButton({
  icon,
  size = 40,
  variant = 'ghost',
  round = false,
  disabled = false,
  style,
  ...rest
}: IconButtonProps) {
  const v = variantStyles[variant];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      hitSlop={8}
      style={({ pressed }) => [
        styles.base,
        {
          width: size,
          height: size,
          borderRadius: round ? borderRadius.full : borderRadius.md,
        },
        v.container,
        pressed && !disabled && v.pressed,
        disabled && styles.disabled,
        style,
      ]}
      {...rest}
    >
      {icon}
    </Pressable>
  );
}
