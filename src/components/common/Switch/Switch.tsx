import { isValidElement, type ReactNode } from 'react';
import {
  Switch as RNSwitch,
  type SwitchProps as RNSwitchProps,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import { colors } from '../../../theme';
import { Text } from '../Text';
import { styles } from './styles';

export type SwitchProps = Omit<RNSwitchProps, 'style'> & {
  value: boolean;
  onValueChange: (next: boolean) => void;
  label?: ReactNode;
  /** Places the label before the switch instead of after it. */
  labelPosition?: 'left' | 'right';
  style?: StyleProp<ViewStyle>;
};

export function Switch({
  value,
  onValueChange,
  label,
  labelPosition = 'right',
  disabled,
  style,
  ...rest
}: SwitchProps) {
  const labelNode =
    label == null ? null : isValidElement(label) ? (
      label
    ) : (
      <Text style={styles.label}>{label}</Text>
    );

  return (
    <View style={[styles.row, disabled && styles.disabled, style]}>
      {labelPosition === 'left' && labelNode}
      <RNSwitch
        disabled={disabled}
        value={value}
        onValueChange={onValueChange}
        thumbColor={colors.surface}
        ios_backgroundColor={colors.border.default}
        trackColor={{ false: colors.border.default, true: colors.primary }}
        {...rest}
      />
      {labelPosition === 'right' && labelNode}
    </View>
  );
}
