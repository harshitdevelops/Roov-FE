import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  label: {
    flexShrink: 1,
  },
  disabled: {
    opacity: 0.5,
  },
});
