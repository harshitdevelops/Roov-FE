import { StyleSheet } from 'react-native';
import { spacing, typography } from '../../../theme';

export const styles = StyleSheet.create({
  horizontal: {
    alignSelf: 'stretch',
  },
  vertical: {
    alignSelf: 'stretch',
  },
  flexLine: {
    flex: 1,
  },
  labelledRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    alignSelf: 'stretch',
  },
  label: {
    ...typography.caption,
  },
});
