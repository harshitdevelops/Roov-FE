import { type ReactNode } from 'react';
import {
  type StyleProp,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import { borderRadius } from '../../../theme';
import { Text } from '../Text';
import { type BadgeVariant, styles, variantStyles } from './styles';

export type { BadgeVariant };

export type BadgeProps = {
  /** Text label. Ignored when `children` is provided. */
  label?: string;
  variant?: BadgeVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** Pill vs. squared corners. Defaults to pill. */
  pill?: boolean;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function Badge({
  label,
  variant = 'neutral',
  leftIcon,
  rightIcon,
  pill = true,
  children,
  style,
  textStyle,
}: BadgeProps) {
  const v = variantStyles[variant];

  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: v.bg,
          borderRadius: pill ? borderRadius.full : borderRadius.sm,
        },
        style,
      ]}
    >
      {leftIcon}
      {children ??
        (label != null && (
          <Text style={[styles.text, { color: v.fg }, textStyle]}>{label}</Text>
        ))}
      {rightIcon}
    </View>
  );
}
