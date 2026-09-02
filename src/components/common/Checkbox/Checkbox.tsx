import { isValidElement, type ReactNode } from 'react';
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import { CheckIcon } from '../../icons';
import { borderRadius, colors } from '../../../theme';
import { Text } from '../Text';
import { styles } from './styles';

export type CheckboxProps = Omit<PressableProps, 'style' | 'children'> & {
  checked: boolean;
  onChange: (next: boolean) => void;
  /** String renders through `Text`; any node is placed as-is beside the box. */
  label?: ReactNode;
  disabled?: boolean;
  /** Box edge length in px. Defaults to 22. */
  size?: number;
  /** Custom mark shown when checked. Defaults to a check icon. */
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
};

export function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  size = 22,
  icon,
  style,
  boxStyle,
  ...rest
}: CheckboxProps) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      disabled={disabled}
      hitSlop={8}
      onPress={() => onChange(!checked)}
      style={[styles.row, disabled && styles.disabled, style]}
      {...rest}
    >
      <View
        style={[
          styles.box,
          { width: size, height: size, borderRadius: borderRadius.sm },
          checked && styles.boxChecked,
          boxStyle,
        ]}
      >
        {checked &&
          (icon ?? (
            <CheckIcon
              width={size * 0.7}
              height={size * 0.7}
              color={colors.text.onPrimary}
            />
          ))}
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
