import { StyleSheet } from 'react-native';
import { borderWidth, colors, spacing } from '../../theme';

export const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing['3xl'],
    gap: spacing.base,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  postHeaderText: {
    flex: 1,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: spacing.sm,
  },
  stat: {
    flex: 1,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginTop: spacing.base,
    paddingTop: spacing.md,
    borderTopWidth: borderWidth.hairline,
    borderTopColor: colors.border.default,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: spacing['3xl'],
    gap: spacing.xs,
  },
});
