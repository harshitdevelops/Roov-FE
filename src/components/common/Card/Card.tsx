import { type ReactNode } from 'react';
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import { spacing } from '../../../theme';
import { type CardVariant, styles, variantStyles } from './styles';

export type { CardVariant };

type SpacingKey = keyof typeof spacing;

export type CardProps = {
  children?: ReactNode;
  variant?: CardVariant;
  /** Theme spacing key or a raw number. Defaults to `xl`. */
  padding?: SpacingKey | number;
  /** Renders the card as a Pressable when provided. */
  onPress?: PressableProps['onPress'];
  /** Fixed content pinned to the left of the children (icon, avatar…). */
  leftIcon?: ReactNode;
  /** Fixed content pinned to the right of the children (chevron, action…). */
  rightIcon?: ReactNode;
  /** Rendered above the body, separated by a hairline. */
  header?: ReactNode;
  /** Rendered below the body, separated by a hairline. */
  footer?: ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  /** Styles the inner row that wraps leftIcon / children / rightIcon. */
  bodyStyle?: StyleProp<ViewStyle>;
};

export function Card({
  children,
  variant = 'elevated',
  padding = 'xl',
  onPress,
  leftIcon,
  rightIcon,
  header,
  footer,
  disabled = false,
  style,
  bodyStyle,
}: CardProps) {
  const pad = typeof padding === 'number' ? padding : spacing[padding];
  const hasRow = leftIcon != null || rightIcon != null;

  const content = (
    <>
      {header != null && <View style={styles.header}>{header}</View>}
      <View style={[hasRow ? styles.row : styles.block, bodyStyle]}>
        {leftIcon != null && <View style={styles.iconSlot}>{leftIcon}</View>}
        <View style={hasRow ? styles.rowContent : undefined}>{children}</View>
        {rightIcon != null && <View style={styles.iconSlot}>{rightIcon}</View>}
      </View>
      {footer != null && <View style={styles.footer}>{footer}</View>}
    </>
  );

  if (onPress != null) {
    return (
      <Pressable
        accessibilityRole="button"
        disabled={disabled}
        onPress={onPress}
        style={({ pressed }) => [
          styles.base,
          variantStyles[variant],
          { padding: pad },
          pressed && !disabled && styles.pressed,
          disabled && styles.disabled,
          style,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View
      style={[
        styles.base,
        variantStyles[variant],
        { padding: pad },
        disabled && styles.disabled,
        style,
      ]}
    >
      {content}
    </View>
  );
}
