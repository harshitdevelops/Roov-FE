import { type ReactNode } from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { borderWidth, colors, spacing } from '../../../theme';
import { Text } from '../Text';
import { styles } from './styles';

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  /** Line thickness in px. Defaults to a hairline. */
  thickness?: number;
  /** Margin applied on the cross axis (top/bottom or left/right). */
  spacing?: number;
  /** Optional centred label (horizontal orientation only). */
  label?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Divider({
  orientation = 'horizontal',
  color = colors.border.default,
  thickness = borderWidth.hairline,
  spacing: gap = spacing.base,
  label,
  style,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <View
        style={[
          styles.vertical,
          { width: thickness, backgroundColor: color, marginHorizontal: gap },
          style,
        ]}
      />
    );
  }

  if (label != null) {
    const line = [
      styles.flexLine,
      { height: thickness, backgroundColor: color },
    ];
    return (
      <View style={[styles.labelledRow, { marginVertical: gap }, style]}>
        <View style={line} />
        <Text style={styles.label}>{label}</Text>
        <View style={line} />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.horizontal,
        { height: thickness, backgroundColor: color, marginVertical: gap },
        style,
      ]}
    />
  );
}
