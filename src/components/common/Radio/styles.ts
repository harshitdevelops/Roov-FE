import { StyleSheet } from 'react-native';
import { borderWidth, colors, spacing } from '../../../theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: borderWidth.medium,
    borderColor: colors.border.default,
    backgroundColor: colors.surface,
  },
  ringSelected: {
    borderColor: colors.primary,
  },
  dot: {
    backgroundColor: colors.primary,
  },
  label: {
    flexShrink: 1,
  },
  disabled: {
    opacity: 0.5,
  },
});
